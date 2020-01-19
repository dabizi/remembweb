import 'package:flutter/material.dart';
import 'package:responsive_grid/responsive_grid.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Remembweb"),
        centerTitle: true,
      ),
      body: SingleChildScrollView(
        child: Container(
          child: ResponsiveGridRow(children: [
            ResponsiveGridCol(   
              lg: 12,
              child: FlatButton(
                  onPressed: () => {},
                  child: Column(crossAxisAlignment: CrossAxisAlignment.stretch,
                      // Replace with a Row for horizontal icon + text
                      children: <Widget>[
                        new Padding(
                                padding: EdgeInsets.only(top :30),
                        child : Image(
                            height: 80, image: AssetImage('assets/image.png'))),
                        new Padding(
                                padding: EdgeInsets.all(5),
                                child: Text("Add", textAlign: TextAlign.center))
                      ])),
            ),
            ResponsiveGridCol(
              xs: 6,
              md: 3,
              child: Container(
                  margin: const EdgeInsets.all(10.0),
                  height: 120,
                  alignment: Alignment.center,
                  child: FlatButton(
                      onPressed: () => {
                        Navigator.of(context).pushNamed('/draw')
                      },
                      child:
                          Column(crossAxisAlignment: CrossAxisAlignment.stretch,
                              // Replace with a Row for horizontal icon + text
                              children: <Widget>[
                            Image(
                                height: 80,
                                image: AssetImage('assets/image.png')),
                            new Padding(
                                padding: EdgeInsets.all(5),
                                child: Text("Draw", textAlign: TextAlign.center))
                          ]))),
            ),
            ResponsiveGridCol(
                xs: 6,
                md: 3,
                child: Container(
                  margin: const EdgeInsets.all(10.0),
                  height: 120,
                  alignment: Alignment.center,
                  child: FlatButton(
                      onPressed: (){ 
                        Navigator.of(context).pushNamed('/physics');
                      },
                      child:
                          Column(crossAxisAlignment: CrossAxisAlignment.stretch,
                              // Replace with a Row for horizontal icon + text
                              children: <Widget>[
                            Image(
                                height: 80,
                                image: AssetImage('assets/image.png')),
                            new Padding(
                                padding: EdgeInsets.all(5),
                                child: Text("Physics", textAlign: TextAlign.center))
                          ])))),
            ResponsiveGridCol(
              xs: 6,
              md: 3,
                child: Container(
                  margin: const EdgeInsets.all(10.0),
                  height: 120,
                  alignment: Alignment.center,
                  child: FlatButton(
                      onPressed: () => {},
                      child:
                          Column(crossAxisAlignment: CrossAxisAlignment.stretch,
                              // Replace with a Row for horizontal icon + text
                              children: <Widget>[
                            Image(
                                height: 80,
                                image: AssetImage('assets/image.png')),
                            new Padding(
                                padding: EdgeInsets.all(5),
                                child: Text("Add", textAlign: TextAlign.center))
                          ]))),
              
            ),
            ResponsiveGridCol(
              child: Container(
                height: 100,
                alignment: Alignment.center,
                //   color: Colors.yellow,
                child: Text(
                  "Colunm 4",
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.w500),
                ),
              ),
            ),
          ]),
        ),
      ),
    );
  }
}

 /* Navigator.of(context).push(MaterialPageRoute(
                        builder : (context) => Physics(),
                        ),
                        );*/