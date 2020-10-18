import 'dart:ui';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:audioplayers/audio_cache.dart';
import 'package:vibration/vibration.dart';

part 'data.dart';
part 'drawer.dart';
part 'background.dart';
part 'measure.dart';
part 'firstpage.dart';

void main() {
  runApp(MyApp());
}


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
      drawer: BoxDrawer(),
    );
  }
}