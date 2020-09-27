part of 'main.dart';

final n = 3.0;

//general data class
class Data {
  List<Color> listOfColors;
  List<Color> listOfDarkColors;
  List<int> listOfWidths;
  List<int> listOfDurations;
  List<String> listOfNames;
  List<List<int>> rhythmArrays;
  List<String> labelArray;
  List<double> listOfScales;
  String gradeLevel;
  List<Container> listOfContainers;
  int boxHeight;
  int boxWidth;
  int maxFull;

  Data ({this.listOfColors, this.listOfDarkColors, this.listOfWidths,
    this.listOfDurations, this.listOfNames, this.rhythmArrays,
    this.labelArray, this.listOfScales, this.gradeLevel, this.listOfContainers,
    this.boxHeight, this.boxWidth, this.maxFull});
}

/*--------------------------------K-1 Data-----------------------------------*/
final k1Data = Data(listOfColors: k1ListOfColors, listOfDarkColors: k1ListOfDarkColors, listOfWidths: k1ListOfWidths,
    listOfDurations: k1ListOfDurations, listOfNames: k1ListOfNames, rhythmArrays: k1RhythmArrays,
    labelArray: k1LabelArray, listOfScales: k1ListOfScales, gradeLevel: 'Kindergarten & First Grade',
    listOfContainers: k1ListOfContainers, boxHeight: k1BoxHeight, boxWidth: k1BoxWidth,
    maxFull: k1MaxFull);

final k1ListOfColors = [Colors.blue, Colors.grey, Colors.black];
final k1ListOfDarkColors = [Colors.blue[900], Colors.grey[800], Colors.white];
final k1ListOfWidths = [24, 24, 24];
final k1ListOfDurations = [4, 4, 4];
final k1ListOfNames = ['quarter','oneAnd', 'quarterRest'];
final k1RhythmArrays = [
  [4, 4, 4, 4], //5: Quarter
  [2, 2, 2, 2], //10: One And
  [0, 0, 0, 0], //16: Quarter Rest
];
final k1LabelArray = ['q','n','Q'];
final k1ListOfScales = [4.0, 3.0, 5.0];
final k1ListOfContainers = [
  for (var j in k1ListOfNames)
    Container(
      child: Center (
        child: Text (
          k1LabelArray[k1ListOfNames.indexOf(j)],
          textAlign: TextAlign.center,
          style: TextStyle(
            fontFamily: 'Musisync',
            color: k1ListOfDarkColors[k1ListOfNames.indexOf(j)],
          ),
          textScaleFactor: k1ListOfScales[k1ListOfNames.indexOf(j)],

        ),
      ),
      width: (k1ListOfWidths[k1ListOfNames.indexOf(j)] * n),
      height: (k1BoxHeight - 4) * n,
      decoration: BoxDecoration(
        color: k1ListOfColors[k1ListOfNames.indexOf(j)],
        border: Border.all(
          color: k1ListOfDarkColors[k1ListOfNames.indexOf(j)],
          width: 1,
        ),
      ),
    )
];
final k1BoxHeight = 40;
final k1BoxWidth = 100;
final k1MaxFull = 16;

/*--------------------------------Second Data-----------------------------------*/
final secondData = Data(listOfColors: secondListOfColors, listOfDarkColors: secondListOfDarkColors, listOfWidths: secondListOfWidths,
    listOfDurations: secondListOfDurations, listOfNames: secondListOfNames, rhythmArrays: secondRhythmArrays,
    labelArray: secondLabelArray, listOfScales: secondListOfScales, gradeLevel: 'Second Grade',
    listOfContainers: secondListOfContainers, boxHeight: secondBoxHeight, boxWidth: secondBoxWidth,
    maxFull: secondMaxFull);

final secondListOfColors = [Colors.blue, Colors.grey, Colors.black, Colors.yellow, Colors.black];

final secondListOfDarkColors = [Colors.blue[900], Colors.grey[800], Colors.white, Colors.yellow[900], Colors.white];
final secondListOfWidths = [24, 24, 24, 48, 48];
final secondListOfDurations = [4, 4, 4, 8, 8];
final secondListOfNames = ['quarter', 'oneAnd','quarterRest', 'half', 'halfRest'];
final secondRhythmArrays = [[4, 4, 4, 4], //1: Quarter
  [2, 2, 2, 2], //6: One And
  [0, 0, 0, 0], //12: Quarter Rest
  [8, 8, 8, 8, 8, 8, 8, 8], //13: Half
  [0, 0, 0, 0, 0, 0, 0, 0], //14: Half Rest
];
final secondLabelArray = [' q', 'n', 'Q', 'h', 'H'];
final secondListOfScales = [4.0, 3.0, 5.0, 4.0, 4.0];
final secondListOfContainers = [
  for (var j in secondListOfNames)
    Container(
      child: Center (
        child: Text (
          secondLabelArray[secondListOfNames.indexOf(j)],
          textAlign: TextAlign.center,
          style: TextStyle(
            fontFamily: 'Musisync',
            color: secondListOfDarkColors[secondListOfNames.indexOf(j)],
          ),
          textScaleFactor: secondListOfScales[secondListOfNames.indexOf(j)],

        ),
      ),
      width: (secondListOfWidths[secondListOfNames.indexOf(j)] * n),
      height: (secondBoxHeight - 4) * n,
      decoration: BoxDecoration(
        color: secondListOfColors[secondListOfNames.indexOf(j)],
        border: Border.all(
          color: secondListOfDarkColors[secondListOfNames.indexOf(j)],
          width: 1,
        ),
      ),
    )
];
final secondBoxHeight = 40;
final secondBoxWidth = 100;
final secondMaxFull = 16;

/*--------------------------------Third Data-----------------------------------*/
final thirdData = Data(listOfColors: thirdListOfColors, listOfDarkColors: thirdListOfDarkColors, listOfWidths: thirdListOfWidths,
    listOfDurations: thirdListOfDurations, listOfNames: thirdListOfNames, rhythmArrays: thirdRhythmArrays,
    labelArray: thirdLabelArray, listOfScales: thirdListOfScales, gradeLevel: 'Third Grade',
    listOfContainers: thirdListOfContainers, boxHeight: thirdBoxHeight, boxWidth: thirdBoxWidth,
    maxFull: thirdMaxFull);

final thirdListOfColors = [Colors.blue, Colors.grey, Colors.black, Colors.yellow, Colors.black,
  Colors.orange, Colors.red, Colors.black, Colors.black];
final thirdListOfDarkColors = [Colors.blue[900], Colors.grey[800], Colors.white, Colors.yellow[900], Colors.white,
  Colors.orange[900], Colors.red[900], Colors.white, Colors.white];
final thirdListOfWidths = [24, 24, 24, 48, 48, 72, 96, 96, 12];
final thirdListOfDurations = [4, 4, 4, 8, 8, 12, 16, 16, 2];
final thirdListOfNames = ['quarter', 'oneAnd', 'quarterRest', 'half', 'halfRest', 'dotHalf', 'whole', 'wholeRest', 'eighthRest'];
final thirdRhythmArrays = [[4, 4, 4, 4], //5: Quarter
  [2, 2, 2, 2], //10: One And
  [0, 0, 0, 0], //16: Quarter Rest
  [8, 8, 8, 8, 8, 8, 8, 8], //3: Half
  [0, 0, 0, 0, 0, 0, 0, 0], //14: Half Rest
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12], //2: Dot Half
  [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16], //1: Whole
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //17: Whole Rest
  [0, 0] //7: Eighth Rest
];
final thirdLabelArray = [' q', 'n', 'Q', 'h', 'H', 'd', 'w','W','E'];
final thirdListOfScales = [4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0];
final thirdListOfContainers = [
  for (var j in thirdListOfNames)
    Container(
      child: Center (
        child: Text (
          thirdLabelArray[thirdListOfNames.indexOf(j)],
          textAlign: TextAlign.center,
          style: TextStyle(
            fontFamily: 'Musisync',
            color: thirdListOfDarkColors[thirdListOfNames.indexOf(j)],
          ),
          textScaleFactor: thirdListOfScales[thirdListOfNames.indexOf(j)],

        ),
      ),
      width: (thirdListOfWidths[thirdListOfNames.indexOf(j)] * n),
      height: (thirdBoxHeight - 4) * n,
      decoration: BoxDecoration(
        color: thirdListOfColors[thirdListOfNames.indexOf(j)],
        border: Border.all(
          color: thirdListOfDarkColors[thirdListOfNames.indexOf(j)],
          width: 1,
        ),
      ),
    )
];
final thirdBoxHeight = 40;
final thirdBoxWidth = 100;
final thirdMaxFull = 16;

/*--------------------------------Fourth Data-----------------------------------*/
final fourthData = Data(listOfColors: fourthListOfColors, listOfDarkColors: fourthListOfDarkColors, listOfWidths: fourthListOfWidths,
    listOfDurations: fourthListOfDurations, listOfNames: fourthListOfNames, rhythmArrays: fourthRhythmArrays,
    labelArray: fourthLabelArray, listOfScales: fourthListOfScales, gradeLevel: 'Fourth Grade',
    listOfContainers: fourthListOfContainers, boxHeight: fourthBoxHeight, boxWidth: fourthBoxWidth,
    maxFull: fourthMaxFull);

final fourthListOfColors = [Colors.blue, Colors.grey, Colors.black, Colors.yellow, Colors.black,
  Colors.orange, Colors.red, Colors.black, Colors.black,
  Colors.pink, Colors.tealAccent[100], Colors.purple];
final fourthListOfDarkColors = [Colors.blue[900], Colors.grey[800], Colors.white, Colors.yellow[900], Colors.white,
  Colors.orange[900], Colors.red[900], Colors.white, Colors.white,
  Colors.pink[900], Colors.tealAccent[400], Colors.purple[900]];
final fourthListOfWidths = [24, 24, 24, 48, 48, 72, 96, 96, 12, 24, 24, 24];
final fourthListOfDurations = [4, 4, 4, 8, 8, 12, 16, 16, 2, 4, 4, 4];
final fourthListOfNames = ['quarter', 'oneAnd', 'quarterRest', 'half', 'halfRest',
  'dotHalf', 'whole', 'wholeRest', 'eighthRest',
  'oneAndA', 'oneEAnd', 'oneEAndA'];
final fourthRhythmArrays = [[4, 4, 4, 4], //5: Quarter
  [2, 2, 2, 2], //10: One And
  [0, 0, 0, 0], //16: Quarter Rest
  [8, 8, 8, 8, 8, 8, 8, 8], //3: Half
  [0, 0, 0, 0, 0, 0, 0, 0], //14: Half Rest
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12], //2: Dot Half
  [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16], //1: Whole
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //17: Whole Rest
  [0, 0], //7: Eighth Rest
  [2, 2, 1, 1], //8: OneAndA
  [1, 1, 2, 2], //9: OneEAnd
  [1, 1, 1, 1], //7: OneEAndA
];
final fourthLabelArray = [' q', 'n', 'Q', 'h', 'H', 'd', 'w','W','E', 'm', 'M', 'y'];
final fourthListOfScales = [4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0,  4.0, 4.0, 4.0];
final fourthListOfContainers = [
  for (var j in fourthListOfNames)
    Container(
      child: Center (
        child: Text (
          fourthLabelArray[fourthListOfNames.indexOf(j)],
          textAlign: TextAlign.center,
          style: TextStyle(
            fontFamily: 'Musisync',
            color: fourthListOfDarkColors[fourthListOfNames.indexOf(j)],
          ),
          textScaleFactor: fourthListOfScales[fourthListOfNames.indexOf(j)],

        ),
      ),
      width: (fourthListOfWidths[fourthListOfNames.indexOf(j)] * n),
      height: (fourthBoxHeight - 4) * n,
      decoration: BoxDecoration(
        color: fourthListOfColors[fourthListOfNames.indexOf(j)],
        border: Border.all(
          color: fourthListOfDarkColors[fourthListOfNames.indexOf(j)],
          width: 1,
        ),
      ),
    )
];
final fourthBoxHeight = 40;
final fourthBoxWidth = 100;
final fourthMaxFull = 16;
/*--------------------------------Fifth Data-----------------------------------*/
final fifthData = Data(listOfColors: fifthListOfColors, listOfDarkColors: fifthListOfDarkColors, listOfWidths: fifthListOfWidths,
    listOfDurations: fifthListOfDurations, listOfNames: fifthListOfNames, rhythmArrays: fifthRhythmArrays,
    labelArray: fifthLabelArray, listOfScales: fifthListOfScales, gradeLevel: 'Fifth Grade',
    listOfContainers: fifthListOfContainers, boxHeight: fifthBoxHeight, boxWidth: fifthBoxWidth,
    maxFull: fifthMaxFull);

final fifthListOfColors = [Colors.blue, Colors.grey, Colors.black, Colors.yellow, Colors.black,
  Colors.orange, Colors.red, Colors.black, Colors.black,
  Colors.pink, Colors.tealAccent[100], Colors.purple, Colors.black,
  Colors.lightGreenAccent[400], Colors.indigo];
final fifthListOfDarkColors = [Colors.blue[900], Colors.grey[800], Colors.white, Colors.yellow[900], Colors.white,
  Colors.orange[900], Colors.red[900], Colors.white, Colors.white,
  Colors.pink[900], Colors.tealAccent[400], Colors.purple[900], Colors.white,
  Colors.lightGreenAccent[700], Colors.indigo[900]];
final fifthListOfWidths = [24, 24, 24, 48, 48, 72, 96, 96, 12, 24, 24, 24, 6, 24, 24];
final fifthListOfDurations = [4, 4, 4, 8, 8, 12, 16, 16, 2, 4, 4, 4, 1,  4, 4];
final fifthListOfNames = ['quarter', 'oneAnd', 'quarterRest', 'half', 'halfRest',
  'dotHalf', 'whole', 'wholeRest', 'eighthRest',
  'oneAndA', 'oneEAnd', 'oneEAndA', 'sixteenthRest','oneEA', 'oneA'];
final fifthRhythmArrays = [[4, 4, 4, 4], //5: Quarter
  [2, 2, 2, 2], //10: One And
  [0, 0, 0, 0], //16: Quarter Rest
  [8, 8, 8, 8, 8, 8, 8, 8], //3: Half
  [0, 0, 0, 0, 0, 0, 0, 0], //14: Half Rest
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12], //2: Dot Half
  [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16], //1: Whole
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //17: Whole Rest
  [0, 0], //7: Eighth Rest
  [2, 2, 1, 1], //8: OneAndA
  [1, 1, 2, 2], //9: OneEAnd
  [1, 1, 1, 1], //7: OneEAndA
  [0], //18: Sixteenth Rest
  [1, 2, 2, 1], //12: OneEA
  [3, 3, 3, 1], //13: OneA
];
final fifthLabelArray = [' q', 'n', 'Q', 'h', 'H', 'd', 'w','W','E', 'm', 'M', 'y', 'S', '¾', 'o'];
final fifthListOfScales = [4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0,  4.0, 4.0, 4.0, 4.0, 4.0, 4.0];
final fifthListOfContainers = [
  for (var j in fifthListOfNames)
    Container(
      child: Center (
        child: Text (
          fifthLabelArray[fifthListOfNames.indexOf(j)],
          textAlign: TextAlign.center,
          style: TextStyle(
            fontFamily: 'Musisync',
            color: fifthListOfDarkColors[fifthListOfNames.indexOf(j)],
          ),
          textScaleFactor: fifthListOfScales[fifthListOfNames.indexOf(j)],

        ),
      ),
      width: (fifthListOfWidths[fifthListOfNames.indexOf(j)] * n),
      height: (fifthBoxHeight - 4) * n,
      decoration: BoxDecoration(
        color: fifthListOfColors[fifthListOfNames.indexOf(j)],
        border: Border.all(
          color: fifthListOfDarkColors[fifthListOfNames.indexOf(j)],
          width: 1,
        ),
      ),
    )
];
final fifthBoxHeight = 40;
final fifthBoxWidth = 100;
final fifthMaxFull = 16;