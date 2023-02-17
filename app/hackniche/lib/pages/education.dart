// ignore_for_file: unused_import, unused_element, prefer_const_constructors, prefer_const_literals_to_create_immutables

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:liquid_pull_to_refresh/liquid_pull_to_refresh.dart';
import 'package:hackniche/colors.dart' as color;

class EducationalVideo extends StatefulWidget {
  const EducationalVideo({super.key});

  @override
  State<EducationalVideo> createState() => _EducationalVideoState();
}

class _EducationalVideoState extends State<EducationalVideo> {
  Future<void> _handleRefresh() async {
    return await Future.delayed(Duration(seconds: 2));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          leading: Icon(Icons.arrow_back_ios),
          elevation: 0,
          title: Padding(
            padding: const EdgeInsets.only(left: 12.0),
            child: Text(
              'Educational Videos',
              style: TextStyle(fontSize: 24, fontFamily: 'Poppins'),
            ),
          ),
          backgroundColor: color.AppColor.gradientFirst,
        ),
        backgroundColor: Color.fromARGB(255, 216, 240, 243),
        body: LiquidPullToRefresh(
          onRefresh: _handleRefresh,
          color: color.AppColor.gradientFirst,
          height: 300,
          backgroundColor: Colors.deepPurple.shade200,
          animSpeedFactor: 10,
          showChildOpacityTransition: true,
          child: ListView(
            scrollDirection: Axis.vertical,
            children: [
              Container(
                margin: EdgeInsets.all(25),
                height: 440,
                width: 350,
                decoration: BoxDecoration(
                    boxShadow: [
                      BoxShadow(
                          blurRadius: 15,
                          offset: Offset(0, 0),
                          color: Colors.grey.withOpacity(.6)),
                      BoxShadow(
                          blurRadius: 15,
                          offset: Offset(0, 0),
                          color: Colors.grey.withOpacity(.6))
                    ],
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(20)),
                child: Column(
                  children: [
                    Stack(children: [
                      Container(
                        height: 200,
                        width: 350,
                        decoration: BoxDecoration(
                            boxShadow: [
                              BoxShadow(
                                  blurRadius: 10,
                                  offset: Offset(0, 0),
                                  color: Colors.grey.withOpacity(.6)),
                              BoxShadow(
                                  blurRadius: 10,
                                  offset: Offset(0, 0),
                                  color: Colors.grey.withOpacity(.6))
                            ],
                            borderRadius: BorderRadius.only(
                                topRight: Radius.circular(20),
                                topLeft: Radius.circular(20)),
                            color: Colors.amber,
                            image: DecorationImage(
                                image: AssetImage('lib/images/thumbnail1.jpg'),
                                fit: BoxFit.fill)),
                      ),
                      Positioned(
                          left: 130,
                          top: 70,
                          child: Icon(Icons.play_circle_outline,
                              size: 65, color: Colors.white))
                    ]),
                    SizedBox(
                      height: 20,
                    ),
                    Text(
                      'Title: Courses for Age 12-18',
                      style: TextStyle(fontSize: 22, fontFamily: 'Poppins'),
                    ),
                    SizedBox(
                      height: 15,
                    ),
                    Padding(
                      padding: const EdgeInsets.only(left: 25.0, right: 25),
                      child: Text(
                        'The course offers the best skilled\ncourses for children under the age of 18.Taught by the best teachers in the country. ',
                        style: TextStyle(fontSize: 16, fontFamily: 'Poppins'),
                      ),
                    ),
                    SizedBox(
                      height: 10,
                    ),
                    Container(
                      height: 40,
                      width: 150,
                      decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(20)),
                      child: Center(
                        child: Text(
                          'LearnNow',
                          style: TextStyle(
                              fontSize: 20,
                              fontFamily: 'Poppins',
                              fontWeight: FontWeight.bold,
                              color: Colors.black),
                        ),
                      ),
                    )
                  ],
                ),
              ),
              Container(
                margin: EdgeInsets.all(25),
                height: 440,
                width: 350,
                decoration: BoxDecoration(
                    boxShadow: [
                      BoxShadow(
                          blurRadius: 10,
                          offset: Offset(0, 0),
                          color: Colors.grey.withOpacity(.6)),
                      BoxShadow(
                          blurRadius: 10,
                          offset: Offset(0, 0),
                          color: Colors.grey.withOpacity(.6))
                    ],
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(20)),
                child: Column(
                  children: [
                    Stack(children: [
                      Container(
                        height: 200,
                        width: 350,
                        decoration: BoxDecoration(
                            boxShadow: [
                              BoxShadow(
                                  blurRadius: 10,
                                  offset: Offset(0, 0),
                                  color: Colors.grey.withOpacity(.6)),
                              BoxShadow(
                                  blurRadius: 10,
                                  offset: Offset(0, 0),
                                  color: Colors.grey.withOpacity(.6))
                            ],
                            borderRadius: BorderRadius.only(
                                topRight: Radius.circular(20),
                                topLeft: Radius.circular(20)),
                            color: Colors.amber,
                            image: DecorationImage(
                                image: AssetImage('lib/images/thumbnail2.jpg'),
                                fit: BoxFit.fill)),
                      ),
                      Positioned(
                          left: 130,
                          top: 70,
                          child: Icon(Icons.play_circle_outline,
                              size: 65, color: Colors.white))
                    ]),
                    SizedBox(
                      height: 20,
                    ),
                    Padding(
                      padding: const EdgeInsets.only(left: 20.0),
                      child: Text(
                        'Title: Time to learn a new lanaguage',
                        style: TextStyle(fontSize: 22, fontFamily: 'Poppins'),
                      ),
                    ),
                    SizedBox(
                      height: 15,
                    ),
                    Padding(
                      padding: const EdgeInsets.only(left: 25.0, right: 15),
                      child: Text(
                        'The course offers the new langauageskills for everyone. ',
                        style: TextStyle(fontSize: 16, fontFamily: 'Poppins'),
                      ),
                    ),
                    SizedBox(
                      height: 10,
                    ),
                    Container(
                      height: 40,
                      width: 150,
                      decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(20)),
                      child: Center(
                        child: Text(
                          'LearnNow',
                          style: TextStyle(
                              fontSize: 20,
                              fontFamily: 'Poppins',
                              fontWeight: FontWeight.bold,
                              color: Colors.black),
                        ),
                      ),
                    )
                  ],
                ),
              ),
              Container(
                margin: EdgeInsets.all(25),
                height: 440,
                width: 350,
                decoration: BoxDecoration(
                    boxShadow: [
                      BoxShadow(
                          blurRadius: 10,
                          offset: Offset(0, 0),
                          color: Colors.grey.withOpacity(.6)),
                      BoxShadow(
                          blurRadius: 10,
                          offset: Offset(0, 0),
                          color: Colors.grey.withOpacity(.6))
                    ],
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(20)),
                child: Column(
                  children: [
                    Stack(children: [
                      Container(
                        height: 200,
                        width: 350,
                        decoration: BoxDecoration(
                            boxShadow: [
                              BoxShadow(
                                  blurRadius: 10,
                                  offset: Offset(0, 0),
                                  color: Colors.grey.withOpacity(.6)),
                              BoxShadow(
                                  blurRadius: 10,
                                  offset: Offset(0, 0),
                                  color: Colors.grey.withOpacity(.6))
                            ],
                            borderRadius: BorderRadius.only(
                                topRight: Radius.circular(20),
                                topLeft: Radius.circular(20)),
                            color: Colors.amber,
                            image: DecorationImage(
                                image: AssetImage('lib/images/thumbnail3.jpg'),
                                fit: BoxFit.fill)),
                      ),
                      Positioned(
                          left: 130,
                          top: 70,
                          child: Icon(Icons.play_circle_outline,
                              size: 65, color: Colors.white))
                    ]),
                    SizedBox(
                      height: 20,
                    ),
                    Text(
                      'Title: Courses for Age 12-18',
                      style: TextStyle(fontSize: 22, fontFamily: 'Poppins'),
                    ),
                    SizedBox(
                      height: 15,
                    ),
                    Padding(
                      padding: const EdgeInsets.only(left: 25.0, right: 25),
                      child: Text(
                        'The course offers the best skilled\ncourses for children under the age of 18.Taught by the best teachers in the country. ',
                        style: TextStyle(fontSize: 16, fontFamily: 'Poppins'),
                      ),
                    ),
                    SizedBox(
                      height: 10,
                    ),
                    Container(
                      height: 40,
                      width: 150,
                      decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(20)),
                      child: Center(
                        child: Text(
                          'LearnNow',
                          style: TextStyle(
                              fontSize: 20,
                              fontFamily: 'Poppins',
                              fontWeight: FontWeight.bold,
                              color: Colors.black),
                        ),
                      ),
                    )
                  ],
                ),
              ),
              Container(
                margin: EdgeInsets.all(25),
                height: 440,
                width: 350,
                decoration: BoxDecoration(
                    boxShadow: [
                      BoxShadow(
                          blurRadius: 10,
                          offset: Offset(0, 0),
                          color: Colors.grey.withOpacity(.6)),
                      BoxShadow(
                          blurRadius: 10,
                          offset: Offset(0, 0),
                          color: Colors.grey.withOpacity(.6))
                    ],
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(20)),
                child: Column(
                  children: [
                    Stack(children: [
                      Container(
                        height: 200,
                        width: 350,
                        decoration: BoxDecoration(
                            boxShadow: [
                              BoxShadow(
                                  blurRadius: 10,
                                  offset: Offset(0, 0),
                                  color: Colors.grey.withOpacity(.6)),
                              BoxShadow(
                                  blurRadius: 10,
                                  offset: Offset(0, 0),
                                  color: Colors.grey.withOpacity(.6))
                            ],
                            borderRadius: BorderRadius.only(
                                topRight: Radius.circular(20),
                                topLeft: Radius.circular(20)),
                            color: Colors.amber,
                            image: DecorationImage(
                                image: AssetImage('lib/images/thumbnail1.jpg'),
                                fit: BoxFit.fill)),
                      ),
                      Positioned(
                          left: 130,
                          top: 70,
                          child: Icon(Icons.play_circle_outline,
                              size: 65, color: Colors.white))
                    ]),
                    SizedBox(
                      height: 20,
                    ),
                    Text(
                      'Title: Courses for Age 12-18',
                      style: TextStyle(fontSize: 22, fontFamily: 'Poppins'),
                    ),
                    SizedBox(
                      height: 15,
                    ),
                    Padding(
                      padding: const EdgeInsets.only(left: 25.0, right: 25),
                      child: Text(
                        'The course offers the best skilled\ncourses for children under the age of 18.Taught by the best teachers in the country. ',
                        style: TextStyle(fontSize: 16, fontFamily: 'Poppins'),
                      ),
                    ),
                    SizedBox(
                      height: 10,
                    ),
                    Container(
                      height: 40,
                      width: 150,
                      decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(20)),
                      child: Center(
                        child: Text(
                          'LearnNow',
                          style: TextStyle(
                              fontSize: 20,
                              fontFamily: 'Poppins',
                              fontWeight: FontWeight.bold,
                              color: Colors.black),
                        ),
                      ),
                    )
                  ],
                ),
              ),
            ],
          ),
        ));
  }
}
