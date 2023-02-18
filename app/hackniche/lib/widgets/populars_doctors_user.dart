// ignore: unused_import
// ignore_for_file: prefer_const_constructors, use_key_in_widget_constructors, unused_import, duplicate_ignore, avoid_print

import 'dart:ffi';

import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../pages/appoinment_user.dart';

class PopularCardUser extends StatelessWidget {
  final String doctorName;
  final String image2;
  final Color color1;
  final String text3;
  final String disease1;

  PopularCardUser({
    required this.doctorName,
    required this.color1,
    required this.disease1,
    required this.image2,
    required this.text3,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        // print(user);
        // print(doc);
        // Navigator.of(context).push(MaterialPageRoute(
        //     builder: (context) => AppointmentUser(
        //           user: user!,
        //           doctorName: doc.toLowerCase(),
        //           fullName: doctorName,
        //           speciality: disease1,
        //           img: image2,
        //           rating: text3,
        //         ),
        //         ),
        //         );
      },
      child: Padding(
        padding: const EdgeInsets.only(left: 0.0),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              width: 360,
              height: 130,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(25),
                color: color1,
              ),
              child: Row(
                children: [
                  Padding(
                    padding: const EdgeInsets.only(left: 20.0),
                    child: Container(
                      width: 120,
                      height: 120,
                      decoration: BoxDecoration(
                          image: DecorationImage(
                              image: AssetImage(image2), fit: BoxFit.cover),
                          borderRadius: BorderRadius.circular(30)),
                    ),
                  ),
                  SizedBox(
                    width: 10,
                  ),
                  Padding(
                    padding: const EdgeInsets.only(
                      top: 10,
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        InkWell(
                          onTap: () {
                            Get.to(() => AppointmentUser(
                                  doctorName: 'Dr. Ayush',
                                  img: 'lib/images/doctor16.png',
                                  fullName: 'Dr. Ayush Shah',
                                  rating: '4.5 (5 Reviews)',
                                  speciality: 'Psychologist',
                                  user: 'Vinit',
                                ));
                          },
                          child: Text(
                            doctorName,
                            style: TextStyle(
                                color: Colors.black,
                                fontSize: 20,
                                fontFamily: 'Poppins',
                                fontWeight: FontWeight.w500),
                          ),
                        ),
                        SizedBox(
                          height: 0,
                        ),
                        Text(disease1,
                            style: TextStyle(
                                color: Colors.black,
                                fontSize: 12,
                                fontFamily: 'Poppins',
                                fontWeight: FontWeight.w100)),
                        SizedBox(
                          height: 10,
                        ),
                        Row(
                          children: [
                            Container(
                                height: 10,
                                width: 10,
                                decoration: BoxDecoration(
                                    image: DecorationImage(
                                        image: AssetImage(
                                            'lib/images/Star.png')))),
                            SizedBox(
                              width: 10,
                            ),
                            Text(
                              text3,
                              style: TextStyle(fontSize: 14),
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
    );
  }
}
