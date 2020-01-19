import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';


class Draw extends StatefulWidget {
  @override
  _DrawState createState() => new _DrawState();
}

class _DrawState extends State<Draw> {
  List<Offset> _points = <Offset>[];
  //Initialize the points

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      body: new Container(
        child: new GestureDetector(
          onPanUpdate: (DragUpdateDetails details) {
            //here when starts drawing
            setState(() {
             RenderBox object = context.findRenderObject(); 
             Offset _localPosition = 
             object.globalToLocal(details.globalPosition);
             _points = new List.from(_points)..add(_localPosition);

            });


          },

          onPanEnd: (DragEndDetails details) => _points.add(null),
          child: new CustomPaint(
            painter: new Signature(points: _points), 
            size: Size.infinite),
          //Need to add up here the boolean to stop after the first line drawn
        ),
    ),
    floatingActionButton: new FloatingActionButton
    (child: new Icon(Icons.clear),
    onPressed: () => _points.clear(),
    ),
    );
  }
}

class Signature extends CustomPainter{
  List<Offset> points;

  Signature({this.points});

  @override 
  void paint(Canvas canvas, Size size) {
    
    Paint paint = new Paint()
    ..color = Colors.black
    ..strokeCap = StrokeCap.round
    ..strokeWidth = 10.0;

    for (int i = 0; i < points.length - 1; i++){
      if (points[i] != null && points[i + 1] != null){
        canvas.drawLine(points[i], points[i + 1], paint);
      }
    }

  }

  @override
  bool shouldRepaint(Signature oldDelegate) => oldDelegate.points != points;
}