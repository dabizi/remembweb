import 'package:flutter/material.dart';

class Physics extends StatelessWidget {
String value = "";

 @override
  Widget build(BuildContext context) {
    return Scaffold(
      
      body: Center(
        child :
  TextField(
  onChanged: (text) {
    value = text;
  }))
  );
}}