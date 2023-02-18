// ignore_for_file: prefer_const_constructors

import 'package:checkmark/checkmark.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:hackniche/pages/home_page.dart';

class Schemes extends StatefulWidget {
  const Schemes({super.key});

  @override
  State<Schemes> createState() => _SchemesState();
}

class _SchemesState extends State<Schemes> {
  bool checked = false;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
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
                  padding: const EdgeInsets.only(left: 24.0, top: 40),
                  child: InkWell(
                    onTap: () {
                      Get.to(() => HomePage());
                    },
                    child: Text(
                      'Schemes',
                      style: TextStyle(fontFamily: 'Poppins', fontSize: 30),
                    ),
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
                                    'Agniveer Yojana',
                                    style: TextStyle(
                                        color: Colors.black,
                                        fontSize: 20,
                                        fontFamily: 'Poppins',
                                        fontWeight: FontWeight.w500),
                                  ),
                                  SizedBox(
                                    height: 10,
                                  ),
                                  Text('20% Pension Returns',
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
                                      image: AssetImage(
                                          'lib/images/benefits2.png'),
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
                                    'Sarkari Yojana',
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
                                          AssetImage('lib/images/images.png'),
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
                                  Text('50% Cut on Taxes',
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
                                      image: AssetImage(
                                          'lib/images/benefits4.jpeg'),
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
}
