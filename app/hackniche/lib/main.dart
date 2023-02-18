// ignore_for_file: prefer_const_constructors, unused_import

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:hackniche/pages/animated_drawer.dart';
import 'package:hackniche/pages/jobs_detail.dart';
import 'package:hackniche/pages/login_page.dart';
import 'package:hackniche/pages/main_child.dart';

import 'pages/doctor_user.dart';
import 'pages/education.dart';
import 'pages/get_started.dart';
import 'pages/google_maps_page.dart';
import 'pages/home_page.dart';
import 'pages/job_page.dart';
import 'pages/mycardspage.dart';
import 'pages/schemes.dart';
import 'pages/skill_teaching.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'Flutter Demo',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: AppointmentUser());
  }
}
