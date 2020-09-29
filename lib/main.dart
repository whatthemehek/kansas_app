import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:audioplayers/audio_cache.dart';
import 'package:vibration/vibration.dart';

part 'data.dart';

void main() {
  runApp(MyApp());
}

final List<int> boxRhythmOne = [];
final List<int> boxRhythmTwo = [];
final List<int> vibrateRhythmOne = [250];
final List<int> vibrateRhythmTwo = [250];
final List<List<int>> boxRhythmNums = [boxRhythmOne, boxRhythmTwo];
final List<List<int>> vibrateRhythmNums = [vibrateRhythmOne, vibrateRhythmTwo];


int _howFullOne = 0;
int _howFullTwo = 0;
final List<int> howFullNums = [_howFullOne, _howFullTwo];


//final n = 3.0; // Scale factor for scroll blocks

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Kansas',
      theme: ThemeData(
        primaryColor: Colors.white,
      ),
      initialRoute: '/k1',
      routes: {
        '/k1': (context) => FirstPage(boxData: k1Data),
        '/second': (context) => FirstPage(boxData: secondData),
        '/third': (context) => FirstPage(boxData: thirdData),
        '/fourth': (context) => FirstPage(boxData: fourthData),
        '/fifth': (context) => FirstPage(boxData: fifthData),
        '/privacy': (context) => PrivacyPolicy(),
      },
    );
  }
}

class BackgroundWidget extends StatefulWidget {
  @override
  //BackgroundWidget({Key key}) : super(key: key);
  final Data boxData;
  BackgroundWidget({this.boxData});
  _BackgroundWidgetState createState() => _BackgroundWidgetState(boxData: boxData);
  Widget build(BuildContext context) {

  }
}
class _BackgroundWidgetState extends State<BackgroundWidget> {
  final Data boxData;
  _BackgroundWidgetState({this.boxData});
  @override
  bool successfulDropOne;
  bool successfulDropTwo;
  Widget build(BuildContext context) {
    return Column (
      children: [
        DragTarget<int>
        (builder: (BuildContext context, List<int> incoming, List rejected) {
          if (successfulDropOne == true) {
            return MeasureBoxWidget(boxData: boxData, measureNumber: 1);
          } else {
            return MeasureBoxWidget(boxData: boxData, measureNumber: 1);
          }
        },

        onAccept: (data) {
          setState(() {
            successfulDropOne = true;
            _howFullOne = _howFullOne - boxData.listOfDurations[boxData.listOfNames.indexOf(_currentListOne[data])];
            _currentListOne.removeAt(data);
          });
        },
        onLeave: (data) {

        }),
        DragTarget<int>
        (builder: (BuildContext context, List<int> incoming, List rejected) {
          if (successfulDropTwo == true) {
            return MeasureBoxWidget(boxData: boxData, measureNumber: 2);
          } else {
            return MeasureBoxWidget(boxData: boxData, measureNumber: 2);
          }
        },

        onAccept: (data) {
          setState(() {
            successfulDropTwo = true;
            _howFullTwo = _howFullTwo - boxData.listOfDurations[boxData.listOfNames.indexOf(_currentListTwo[data])];
            _currentListTwo.removeAt(data);
          });
        },
        onLeave: (data) {

        })
      ]
    );
  }
}

class MeasureBoxWidget extends StatefulWidget {
  final Data boxData;
  final int measureNumber;
  MeasureBoxWidget({this.boxData, this.measureNumber});
  @override
  //MeasureBoxWidget({Key key}) : super(key: key);
  _MBWidgetState createState() => _MBWidgetState(boxData: boxData, measureNumber: measureNumber);
  Widget build(BuildContext context) {

  }
}


final AudioCache player = new AudioCache(prefix: 'sounds/');

void _vibrate(List<int> vibrateRhythm, List<int> boxRhythm) async {
  if (await Vibration.hasVibrator() && await Vibration.hasCustomVibrationsSupport()) {
    vibrateRhythm.clear();
    int rest = 250;
    for (int i = 0; i < boxRhythm.length; i++) {
      if (boxRhythm[i] != 0) {
        vibrateRhythm.add(rest + 10);
        vibrateRhythm.add(boxRhythm[i]*250 - 10);
        i += boxRhythm[i] - 1;
        rest = 0;
      } else {
        rest += 250;
      }
    }
    Vibration.vibrate(pattern: vibrateRhythm);
    print(vibrateRhythm);
  }
}




class _MBWidgetState extends State<MeasureBoxWidget> {
  final Data boxData;
  final int measureNumber;
  _MBWidgetState({this.boxData, this.measureNumber});
  @override
  bool isButtonEnabled;
  Function _enableButton(int _howFull, var _currentList, List<int> boxRhythm, List<int> vibrateRhythm) {
    isButtonEnabled = (_howFull == boxData.maxFull);
    if (isButtonEnabled) {
      return () {
        boxRhythm.clear();
        for (var l in _currentList) {
          boxRhythm.addAll(boxData.rhythmArrays[boxData.listOfNames.indexOf(l)]);
        }
        player.clearCache();
        List<String> loadAllArray = [];
        for (int i = 0; i < boxRhythm.length; i++) {
          loadAllArray.add('Index'+ (i + 1).toString() + 'Length' + boxRhythm[i].toString() + '.wav');
          if (boxRhythm[i] != 0) {
            i = i + boxRhythm[i] - 1;
          }
        }
        player.load('metronome.wav');
        player.loadAll(loadAllArray);
        player.play('metronome.wav');
        _vibrate(vibrateRhythm, boxRhythm);
        for (String j in loadAllArray) {
          player.play(j);
        }
      };
    } else {
      return null;
    }
  }

  Function _removeRhythm(int indexCurrentList, int indexData, int _howFull, var _currentList) {
    return () {
      setState(() {
        isAccessible = true;
        _currentList.removeAt(indexCurrentList);
        _howFull -= boxData.listOfDurations[indexData];
      });
    };
  }

  Widget build(BuildContext context) {
    int _howFull = howFullNums[measureNumber - 1];
    var _currentList = currentListNums[measureNumber - 1];
    List<int> boxRhythm = boxRhythmNums[measureNumber - 1];
    List<int> vibrateRhythm = vibrateRhythmNums[measureNumber - 1];
    if (isAccessible) {
      return Container(
          child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Center(
                  //Draws the box, with the right size
                    child: Container(
                        decoration: BoxDecoration(
                          border: Border.all(
                            color: Colors.grey,
                            width: 1,
                          ),
                        ),
                        child: Container(
                            height: boxData.boxHeight * n,
                            width: boxData.boxWidth * n,
                            decoration: BoxDecoration(
                              color: Color(0xc9c9c9),
                              border: Border.all(
                                color: Colors.white,
                                width: 2 * n,
                              ),
                            ),
                            // Draws the blocks currently in the box
                            child: Center(
                                child: Row(
                                  children: [
                                    for (int i = 0; i < _currentList.length; i++)
                                      Container (
                                          width: boxData.listOfWidths[boxData.listOfNames.indexOf(_currentList[i])]*n,
                                          height:(boxData.boxHeight - 4)*n,
                                          child: RawMaterialButton(
                                            onPressed: _removeRhythm(i, boxData.listOfNames.indexOf(_currentList[i]), _howFull, _currentList),
                                            padding: EdgeInsets.all(0),
                                            child: Tooltip(message: _currentList[i],
                                                child: boxData.listOfContainers[boxData.listOfNames.indexOf(_currentList[i])]),
                                          )
                                      )
                                  ],
                                )
                            )
                        )
                    )
                ),
                Container(
                  margin: EdgeInsets.symmetric(vertical: 20.0),
                  child: IconButton(
                    iconSize: 80.0,
                    icon: Icon(Icons.play_circle_filled),
                    color: Colors.blue,
                    disabledColor: Colors.grey,
                    onPressed: _enableButton(_howFull, _currentList, boxRhythm, vibrateRhythm),
                    tooltip: "Play Rhythm",
                  ),
                )
              ]
          )
      );
    } else {
      return DragTarget<String>(
        builder: (BuildContext context, List<String> incoming, List rejected) {
          return Column (
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Center (
                  //Draws the box, with the right size
                    child: Container (
                        decoration: BoxDecoration(
                          border: Border.all(
                            color: Colors.grey,
                            width: 1,
                          ),
                        ),
                        child: Container (
                            height: boxData.boxHeight*n,
                            width: boxData.boxWidth*n,
                            decoration: BoxDecoration(
                              color: Color(0xc9c9c9),
                              border: Border.all(
                                color: Colors.white,
                                width: 2*n,
                              ),
                            ),
                            // Draws the blocks currently in the box
                            child: Center (
                                child: Row(
                                  children: [
                                    for (var i in _currentList)
                                      Draggable(
                                        child: boxData.listOfContainers[boxData.listOfNames.indexOf(i)],
                                        feedback: Material (
                                          child: boxData.listOfContainers[boxData.listOfNames.indexOf(i)],
                                        ),
                                        childWhenDragging: null,
                                        data: (_currentList.indexOf(i)),
                                      ),
                                  ],
                                )
                            )
                        )
                    )
                ),
                Container(
                  margin: EdgeInsets.symmetric(vertical: 20.0),
                  child: IconButton (
                    iconSize: 80.0,
                    icon: Icon(Icons.play_circle_filled),
                    color: Colors.blue,
                    disabledColor: Colors.grey,
                    onPressed: _enableButton(_howFull, _currentList, boxRhythm, vibrateRhythm),
                    tooltip: "Kansas",
                  ),
                )
              ]
          );
        },

        onWillAccept: (data) => boxData.listOfDurations[boxData.listOfNames.indexOf(data)] + _howFull <= boxData.maxFull,

        onAccept: (data) {
          setState(() {
            isAccessible = false;
            _howFull = boxData.listOfDurations[boxData.listOfNames.indexOf(data)] + _howFull;
            _currentList.add(data);
          });
        },
        onLeave: (data) {

        },

      );
    }
  }
}

//Compose Page
var _currentListOne = [];
var _currentListTwo = [];
var currentListNums = [_currentListOne, _currentListTwo];
var isAccessible = false;

class _FirstPageWidgetState extends State<FirstPage> {
  final Data boxData;
  _FirstPageWidgetState({this.boxData});
  @override
  Widget build(BuildContext context) {
    Function _addRhythm(int index, Data boxData, int measureNumber) {
      return () {
        setState(() {
          isAccessible = true;
          if (boxData.listOfDurations[index] + howFullNums[measureNumber - 1] <= boxData.maxFull) {
            currentListNums[measureNumber - 1].add(boxData.listOfNames[index]);
            howFullNums[measureNumber - 1] += boxData.listOfDurations[index];
          }
        });
      };
    }
    if (isAccessible) {
      return Scaffold(
        appBar: AppBar(
          title: Text(boxData.gradeLevel),
        ),
        body: Column (
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              Container (
                  margin: EdgeInsets.symmetric(vertical: 20.0),
                  height: (boxData.boxHeight - 4)*n,
                  child: ListView(
                      scrollDirection: Axis.horizontal,
                      children: [
                        for (var index in boxData.listOfContainers)
                          Container (
                            width: boxData.listOfWidths[boxData.listOfContainers.indexOf(index)]*n,
                            height:(boxData.boxHeight - 4)*n,
                            child: RawMaterialButton(
                              padding: EdgeInsets.all(0),
                              onPressed: _addRhythm(boxData.listOfContainers.indexOf(index), boxData, 1),
                              child: Tooltip(message: boxData.listOfNames[boxData.listOfContainers.indexOf(index)],
                                  child: index),
                            ),
                          )
                      ]
                  )
              ),
              Expanded(
                  child: Container(
                    color: Color(0xffe4e1),
                    child: MeasureBoxWidget(boxData: boxData),
                  )
              ),
            ]// Children
        ),
        drawer: Drawer (
          child: ListView(
            padding: EdgeInsets.zero,
            children: <Widget>[
              DrawerHeader(
                child: Text('Menu'),
                decoration: BoxDecoration(
                  color: Colors.white,
                ),
              ),
              ListTile(
                title: Text('Kindergarten and First Grade'),
                onTap: () {
                  boxRhythmOne.clear();
                  boxRhythmTwo.clear();
                  Navigator.pushNamed(context, '/k1');
                },
              ),
              ListTile(
                title: Text('Second Grade'),
                onTap: () {
                  boxRhythmOne.clear();
                  boxRhythmTwo.clear();
                  Navigator.pushNamed(context, '/second');
                },
              ),
              ListTile(
                title: Text('Third Grade'),
                onTap: () {
                  boxRhythmOne.clear();
                  boxRhythmTwo.clear();
                  Navigator.pushNamed(context, '/third');
                },
              ),
              ListTile(
                title: Text('Fourth Grade'),
                onTap: () {
                  boxRhythmOne.clear();
                  boxRhythmTwo.clear();
                  Navigator.pushNamed(context, '/fourth');
                },
              ),
              ListTile(
                title: Text('Fifth Grade'),
                onTap: () {
                  boxRhythmOne.clear();
                  boxRhythmTwo.clear();
                  Navigator.pushNamed(context, '/fifth');
                },
              ),
              ListTile(
                title: Text('Privacy Policy'),
                onTap: () {
                  Navigator.pushNamed(context, '/privacy');
                },
              ),
              SwitchListTile(
                title: Text('Screen-reader Optimized'),
                value: isAccessible,
                onChanged: (bool value) {
                  setState(() {
                    isAccessible = value;
                  });
                },
              )
            ],
          ),
        ),
      );
    } else {
      return Scaffold(
        appBar: AppBar(
          title: Text(boxData.gradeLevel),
        ),
        body: Column (
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              Container (
                  margin: EdgeInsets.symmetric(vertical: 20.0),
                  height: (boxData.boxHeight - 4)*n,
                  child: ListView(
                      scrollDirection: Axis.horizontal,
                      children: [
                        for (var index in boxData.listOfContainers)
                          Draggable<String>(
                            child: index,
                            feedback: Material(
                              child: index,
                            ),
                            childWhenDragging: index,
                            data: boxData.listOfNames[boxData.listOfContainers.indexOf(index)],
                            affinity: Axis.vertical,
                          )
                      ]
                  )
              ),
              Expanded(
                  child: Container(
                    color: Color(0xffe4e1),
                    child: BackgroundWidget(boxData: boxData),
                  )
              ),
            ]// Children
        ),
        drawer: Drawer (
          child: ListView(
            padding: EdgeInsets.zero,
            children: <Widget>[
              DrawerHeader(
                child: Text('Menu'),
                decoration: BoxDecoration(
                  color: Colors.white,
                ),
              ),
              ListTile(
                title: Text('Kindergarten and First Grade'),
                onTap: () {
                  boxRhythmOne.clear();
                  boxRhythmTwo.clear();
                  Navigator.pushNamed(context, '/k1');
                },
              ),
              ListTile(
                title: Text('Second Grade'),
                onTap: () {
                  boxRhythmOne.clear();
                  boxRhythmTwo.clear();
                  Navigator.pushNamed(context, '/second');
                },
              ),
              ListTile(
                title: Text('Third Grade'),
                onTap: () {
                  boxRhythmOne.clear();
                  boxRhythmTwo.clear();
                  Navigator.pushNamed(context, '/third');
                },
              ),
              ListTile(
                title: Text('Fourth Grade'),
                onTap: () {
                  boxRhythmOne.clear();
                  boxRhythmTwo.clear();
                  Navigator.pushNamed(context, '/fourth');
                },
              ),
              ListTile(
                title: Text('Fifth Grade'),
                onTap: () {
                  boxRhythmOne.clear();
                  boxRhythmTwo.clear();
                  Navigator.pushNamed(context, '/fifth');
                },
              ),
              ListTile(
                title: Text('Privacy Policy'),
                onTap: () {
                  Navigator.pushNamed(context, '/privacy');
                },
              ),
              SwitchListTile(
                title: Text('Screen-reader Optimized'),
                value: isAccessible,
                onChanged: (bool value) {
                  setState(() {
                    isAccessible = value;
                  });
                },
              )
            ],
          ),
        ),
      );
    }
  }
}

class FirstPage extends StatefulWidget{
  final Data boxData;
  FirstPage({this.boxData});
  @override
  _FirstPageWidgetState createState() => _FirstPageWidgetState(boxData: boxData);
  Widget build(BuildContext context) {


  }
}
class PrivacyPolicy extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Privacy Policy'),
      ),
      body: Text(
          'At the present (7/21/20), the Mehek Box app and webapp do not intake any user data, in any form.'
      ),
      drawer: Drawer (
        child: ListView(
          padding: EdgeInsets.zero,
          children: <Widget>[
            DrawerHeader(
              child: Text('Menu'),
              decoration: BoxDecoration(
                color: Colors.white,
              ),
            ),
            ListTile(
              title: Text('Kindergarten and First Grade'),
              onTap: () {
                Navigator.pushNamed(context, '/k1');
              },
            ),
            ListTile(
              title: Text('Second Grade'),
              onTap: () {
                Navigator.pushNamed(context, '/second');
              },
            ),
            ListTile(
              title: Text('Third Grade'),
              onTap: () {
                Navigator.pushNamed(context, '/third');
              },
            ),
            ListTile(
              title: Text('Fourth Grade'),
              onTap: () {
                Navigator.pushNamed(context, '/fourth');
              },
            ),
            ListTile(
              title: Text('Fifth Grade'),
              onTap: () {
                Navigator.pushNamed(context, '/fifth');
              },
            ),
            ListTile(
              title: Text('Privacy Policy'),
              onTap: () {
                Navigator.pushNamed(context, '/privacy');
              },
            ),
          ],
        ),
      ),
    );
  }
}
