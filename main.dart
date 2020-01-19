import 'package:flutter/material.dart';
import 'package:remembweb/physics.dart';
import 'package:remembweb/draw.dart';
import 'home.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Remembweb',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
    home: Home(),
    routes: {
      '/physics': (_) => Physics(),
      '/draw': (_) => Draw(),
    }
    );
  }
}