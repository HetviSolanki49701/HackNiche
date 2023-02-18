// ignore_for_file: prefer_const_constructors

import 'package:checkmark/checkmark.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:get/get.dart';
import 'package:hackniche/colors.dart' as color;

import 'articles.dart';
import 'home_page.dart';
import 'main_child.dart';
import 'nearby_schools.dart';

class Benefits extends StatefulWidget {
  const Benefits({super.key});

  @override
  State<Benefits> createState() => _BenefitsState();
}

class _BenefitsState extends State<Benefits> {
  var currentIndex = 2;
  bool checked = false;
  @override
  Widget build(BuildContext context) {
    double displayWidth = MediaQuery.of(context).size.width;
    return Scaffold(
      bottomNavigationBar: Container(
        margin: EdgeInsets.all(displayWidth * .05),
        height: displayWidth * .155,
        decoration: BoxDecoration(
          color: color.AppColor.homePageBackground,
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(.1),
              blurRadius: 30,
              offset: Offset(0, 10),
            ),
          ],
          borderRadius: BorderRadius.circular(50),
        ),
        child: ListView.builder(
          itemCount: 4,
          scrollDirection: Axis.horizontal,
          padding: EdgeInsets.symmetric(horizontal: displayWidth * .02),
          itemBuilder: (context, index) => InkWell(
            onTap: () {
              setState(() {
                currentIndex = index;
                HapticFeedback.lightImpact();
                if (index == 1) {
                  Get.to(() => DoctorSoldier());
                } else if (index == 2) {
                  Get.to(() => Benefits());
                } else if (index == 3) {
                  Get.to(() => FindArticle());
                } else if (index == 0) {
                  Get.to(() => MainChild());
                }
              });
            },
            splashColor: Colors.transparent,
            highlightColor: Colors.transparent,
            child: Stack(
              children: [
                AnimatedContainer(
                  duration: Duration(seconds: 1),
                  curve: Curves.fastLinearToSlowEaseIn,
                  width: index == currentIndex
                      ? displayWidth * .32
                      : displayWidth * .18,
                  alignment: Alignment.center,
                  child: AnimatedContainer(
                    duration: Duration(seconds: 1),
                    curve: Curves.fastLinearToSlowEaseIn,
                    height: index == currentIndex ? displayWidth * .12 : 0,
                    width: index == currentIndex ? displayWidth * .32 : 0,
                    decoration: BoxDecoration(
                      color: index == currentIndex
                          ? Colors.blueAccent.withOpacity(.2)
                          : Colors.transparent,
                      borderRadius: BorderRadius.circular(50),
                    ),
                  ),
                ),
                AnimatedContainer(
                  duration: Duration(seconds: 1),
                  curve: Curves.fastLinearToSlowEaseIn,
                  width: index == currentIndex
                      ? displayWidth * .31
                      : displayWidth * .18,
                  alignment: Alignment.center,
                  child: Stack(
                    children: [
                      Row(
                        children: [
                          AnimatedContainer(
                            duration: Duration(seconds: 1),
                            curve: Curves.fastLinearToSlowEaseIn,
                            width:
                                index == currentIndex ? displayWidth * .13 : 0,
                          ),
                          AnimatedOpacity(
                            opacity: index == currentIndex ? 1 : 0,
                            duration: Duration(seconds: 1),
                            curve: Curves.fastLinearToSlowEaseIn,
                            child: Text(
                              index == currentIndex
                                  ? '${listOfStrings[index]}'
                                  : '',
                              style: TextStyle(
                                color: Colors.blueAccent,
                                fontWeight: FontWeight.w600,
                                fontSize: 15,
                              ),
                            ),
                          ),
                        ],
                      ),
                      Row(
                        children: [
                          AnimatedContainer(
                            duration: Duration(seconds: 1),
                            curve: Curves.fastLinearToSlowEaseIn,
                            width:
                                index == currentIndex ? displayWidth * .03 : 20,
                          ),
                          Icon(
                            listOfIcons[index],
                            size: displayWidth * .076,
                            color: index == currentIndex
                                ? Colors.blueAccent
                                : Colors.black26,
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
      body: SingleChildScrollView(
        child: SafeArea(
          child: Container(
            height: 800,
            width: 394,
            color: Colors.white,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Padding(
                  padding: const EdgeInsets.only(left: 24.0, top: 10),
                  child: Text(
                    'Benefits',
                    style: TextStyle(fontFamily: 'Poppins', fontSize: 30),
                  ),
                ),
                SizedBox(
                  height: 20,
                ),
                Padding(
                  padding: const EdgeInsets.only(
                    left: 20.0,
                  ),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        width: 340,
                        height: 130,
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
                          borderRadius: BorderRadius.circular(25),
                          color: Color(0xFFFFFFFF),
                        ),
                        child: Row(
                          children: [
                            Container(
                              margin: EdgeInsets.only(left: 10),
                              padding: const EdgeInsets.only(left: 40.0),
                              width: 120,
                              height: 100,
                              decoration: BoxDecoration(
                                  image: DecorationImage(
                                      image: AssetImage(
                                          'lib/images/benefits1.jpeg'),
                                      fit: BoxFit.fitHeight),
                                  borderRadius: BorderRadius.circular(30)),
                            ),
                            SizedBox(
                              width: 10,
                            ),
                            Padding(
                              padding: const EdgeInsets.only(
                                top: 10,
                              ),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.center,
                                children: [
                                  Text(
                                    'Raksha Mantri Fund',
                                    style: TextStyle(
                                        color: Colors.black,
                                        fontSize: 18,
                                        fontFamily: 'Poppins',
                                        fontWeight: FontWeight.w500),
                                  ),
                                  SizedBox(
                                    height: 10,
                                  ),
                                  Text('20% Cut on Tuition Fee',
                                      style: TextStyle(
                                          color: Colors.black,
                                          fontSize: 14,
                                          fontFamily: 'Poppins',
                                          fontWeight: FontWeight.w100)),
                                  SizedBox(
                                    height: 10,
                                  ),
                                  Row(
                                    children: [
                                      TextButton(
                                        onPressed: () {},
                                        child: Text(
                                          'Apply Now',
                                          style: TextStyle(
                                              fontSize: 18,
                                              fontFamily: 'Poppins',
                                              fontWeight: FontWeight.bold),
                                        ),
                                      ),
                                      Container(
                                        height: 20,
                                        width: 20,
                                        alignment: Alignment.center,
                                        child: GestureDetector(
                                          onTap: () {
                                            setState(() {
                                              checked = !checked;
                                            });
                                          },
                                          child: SizedBox(
                                            height: 20,
                                            width: 20,
                                            child: CheckMark(
                                              active: checked,
                                              curve: Curves.decelerate,
                                              duration: const Duration(
                                                  milliseconds: 500),
                                            ),
                                          ),
                                        ),
                                      )
                                    ],
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                // SizedBox(
                //   height: 30,
                // ),
                // Padding(
                //   padding: const EdgeInsets.only(
                //     left: 20.0,
                //   ),
                //   child: Row(
                //     crossAxisAlignment: CrossAxisAlignment.start,
                //     children: [
                //       Container(
                //         width: 340,
                //         height: 130,
                //         decoration: BoxDecoration(
                //           boxShadow: [
                //             BoxShadow(
                //                 blurRadius: 15,
                //                 offset: Offset(0, 0),
                //                 color: Colors.grey.withOpacity(.6)),
                //             BoxShadow(
                //                 blurRadius: 15,
                //                 offset: Offset(0, 0),
                //                 color: Colors.grey.withOpacity(.6))
                //           ],
                //           borderRadius: BorderRadius.circular(25),
                //           color: Color(0xFFFFFFFF),
                //         ),
                //         child: Row(
                //           children: [
                //             Container(
                //               margin: EdgeInsets.only(left: 10),
                //               padding: const EdgeInsets.only(left: 40.0),
                //               width: 120,
                //               height: 100,
                //               decoration: BoxDecoration(
                //                   image: DecorationImage(
                //                       image: AssetImage('lib/images/doc21.jpg'),
                //                       fit: BoxFit.fitHeight),
                //                   borderRadius: BorderRadius.circular(30)),
                //             ),
                //             SizedBox(
                //               width: 10,
                //             ),
                //             Padding(
                //               padding: const EdgeInsets.only(
                //                 top: 10,
                //               ),
                //               child: Column(
                //                 crossAxisAlignment: CrossAxisAlignment.center,
                //                 children: [
                //                   Text(
                //                     'Atal Yojana',
                //                     style: TextStyle(
                //                         color: Colors.black,
                //                         fontSize: 20,
                //                         fontFamily: 'Poppins',
                //                         fontWeight: FontWeight.w500),
                //                   ),
                //                   SizedBox(
                //                     height: 10,
                //                   ),
                //                   Text('20% Cut on Tuition Fee',
                //                       style: TextStyle(
                //                           color: Colors.black,
                //                           fontSize: 14,
                //                           fontFamily: 'Poppins',
                //                           fontWeight: FontWeight.w100)),
                //                   SizedBox(
                //                     height: 10,
                //                   ),
                //                   Row(
                //                     children: [
                //                       TextButton(
                //                         onPressed: () {},
                //                         child: Text(
                //                           'Apply Now',
                //                           style: TextStyle(
                //                               fontSize: 18,
                //                               fontFamily: 'Poppins',
                //                               fontWeight: FontWeight.bold),
                //                         ),
                //                       ),
                //                       Container(
                //                         height: 20,
                //                         width: 20,
                //                         alignment: Alignment.center,
                //                         child: GestureDetector(
                //                           onTap: () {
                //                             setState(() {
                //                               checked = !checked;
                //                             });
                //                           },
                //                           child: SizedBox(
                //                             height: 20,
                //                             width: 20,
                //                             child: CheckMark(
                //                               active: checked,
                //                               curve: Curves.decelerate,
                //                               duration: const Duration(
                //                                   milliseconds: 500),
                //                             ),
                //                           ),
                //                         ),
                //                       )
                //                     ],
                //                   ),
                //                 ],
                //               ),
                //             ),
                //           ],
                //         ),
                //       ),
                //     ],
                //   ),
                // ),
                SizedBox(
                  height: 30,
                ),
                Padding(
                  padding: const EdgeInsets.only(
                    left: 20.0,
                  ),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        width: 340,
                        height: 130,
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
                          borderRadius: BorderRadius.circular(25),
                          color: Color(0xFFFFFFFF),
                        ),
                        child: Row(
                          children: [
                            Container(
                              margin: EdgeInsets.only(left: 10),
                              padding: const EdgeInsets.only(left: 40.0),
                              width: 120,
                              height: 100,
                              decoration: BoxDecoration(
                                  image: DecorationImage(
                                      image:
                                          AssetImage('lib/images/scheme1.jpeg'),
                                      fit: BoxFit.fitHeight),
                                  borderRadius: BorderRadius.circular(30)),
                            ),
                            SizedBox(
                              width: 10,
                            ),
                            Padding(
                              padding: const EdgeInsets.only(
                                top: 10,
                              ),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.center,
                                children: [
                                  Text(
                                    'Agniveer Scheme',
                                    style: TextStyle(
                                        color: Colors.black,
                                        fontSize: 20,
                                        fontFamily: 'Poppins',
                                        fontWeight: FontWeight.w500),
                                  ),
                                  SizedBox(
                                    height: 10,
                                  ),
                                  Text('Invest your money',
                                      style: TextStyle(
                                          color: Colors.black,
                                          fontSize: 14,
                                          fontFamily: 'Poppins',
                                          fontWeight: FontWeight.w100)),
                                  SizedBox(
                                    height: 10,
                                  ),
                                  Row(
                                    children: [
                                      TextButton(
                                        onPressed: () {},
                                        child: Text(
                                          'Applied',
                                          style: TextStyle(
                                              fontSize: 18,
                                              fontFamily: 'Poppins',
                                              fontWeight: FontWeight.bold),
                                        ),
                                      ),
                                      Icon(Icons.done,
                                          size: 30,
                                          color:
                                              Color.fromARGB(255, 11, 240, 18))
                                    ],
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                SizedBox(
                  height: 30,
                ),
                Padding(
                  padding: const EdgeInsets.only(
                    left: 20.0,
                  ),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        width: 340,
                        height: 130,
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
                          borderRadius: BorderRadius.circular(25),
                          color: Color(0xFFFFFFFF),
                        ),
                        child: Row(
                          children: [
                            Container(
                              margin: EdgeInsets.only(left: 10),
                              padding: const EdgeInsets.only(left: 40.0),
                              width: 120,
                              height: 100,
                              decoration: BoxDecoration(
                                  image: DecorationImage(
                                      image:
                                          AssetImage('lib/images/scheme3.png'),
                                      fit: BoxFit.fitHeight),
                                  borderRadius: BorderRadius.circular(30)),
                            ),
                            SizedBox(
                              width: 10,
                            ),
                            Padding(
                              padding: const EdgeInsets.only(
                                top: 10,
                              ),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.center,
                                children: [
                                  Text(
                                    'Shahu Maharaj',
                                    style: TextStyle(
                                        color: Colors.black,
                                        fontSize: 20,
                                        fontFamily: 'Poppins',
                                        fontWeight: FontWeight.w500),
                                  ),
                                  SizedBox(
                                    height: 10,
                                  ),
                                  Text('50% Cut on Tuition Fee',
                                      style: TextStyle(
                                          color: Colors.black,
                                          fontSize: 14,
                                          fontFamily: 'Poppins',
                                          fontWeight: FontWeight.w100)),
                                  SizedBox(
                                    height: 10,
                                  ),
                                  Row(
                                    children: [
                                      TextButton(
                                        onPressed: () {},
                                        child: Text(
                                          'In Process',
                                          style: TextStyle(
                                              fontSize: 18,
                                              fontFamily: 'Poppins',
                                              fontWeight: FontWeight.bold),
                                        ),
                                      ),
                                      Icon(Icons.forward_5,
                                          size: 30, color: Colors.red)
                                    ],
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                SizedBox(
                  height: 30,
                ),
                Padding(
                  padding: const EdgeInsets.only(
                    left: 20.0,
                  ),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        width: 340,
                        height: 130,
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
                          borderRadius: BorderRadius.circular(25),
                          color: Color(0xFFFFFFFF),
                        ),
                        child: Row(
                          children: [
                            Container(
                              margin: EdgeInsets.only(left: 10),
                              padding: const EdgeInsets.only(left: 40.0),
                              width: 120,
                              height: 100,
                              decoration: BoxDecoration(
                                  image: DecorationImage(
                                      image:
                                          AssetImage('lib/images/scheme2.png'),
                                      fit: BoxFit.fitHeight),
                                  borderRadius: BorderRadius.circular(30)),
                            ),
                            SizedBox(
                              width: 10,
                            ),
                            Padding(
                              padding: const EdgeInsets.only(
                                top: 10,
                              ),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.center,
                                children: [
                                  Text(
                                    'Rajarshi Scheme',
                                    style: TextStyle(
                                        color: Colors.black,
                                        fontSize: 20,
                                        fontFamily: 'Poppins',
                                        fontWeight: FontWeight.w500),
                                  ),
                                  SizedBox(
                                    height: 10,
                                  ),
                                  Text('20% Cut on Abroad Fee',
                                      style: TextStyle(
                                          color: Colors.black,
                                          fontSize: 14,
                                          fontFamily: 'Poppins',
                                          fontWeight: FontWeight.w100)),
                                  SizedBox(
                                    height: 10,
                                  ),
                                  Row(
                                    children: [
                                      TextButton(
                                        onPressed: () {},
                                        child: Text(
                                          'Disbursed',
                                          style: TextStyle(
                                              fontSize: 18,
                                              fontFamily: 'Poppins',
                                              fontWeight: FontWeight.bold),
                                        ),
                                      ),
                                      Icon(
                                        Icons.done_all,
                                        size: 25,
                                        color: Color.fromARGB(255, 37, 248, 44),
                                      )
                                    ],
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                SizedBox(
                  height: 30,
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  List<IconData> listOfIcons = [
    Icons.home_rounded,
    Icons.favorite_rounded,
    Icons.account_balance_outlined,
    Icons.person_rounded,
  ];

  List<String> listOfStrings = [
    'Fitness',
    'Schools',
    'Benefits',
    'Blogs',
  ];
}
