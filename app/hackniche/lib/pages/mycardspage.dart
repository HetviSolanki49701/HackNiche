// ignore_for_file: use_key_in_widget_constructors, library_private_types_in_public_api, unused_field, prefer_final_fields, prefer_const_constructors, prefer_const_literals_to_create_immutables

import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:hackniche/widgets/card_back.dart';
import 'package:slide_to_act/slide_to_act.dart';

import '../widgets/card_front.dart';

class MyCardsPage extends StatefulWidget {
  @override
  _MyCardsPageState createState() => _MyCardsPageState();
}

class _MyCardsPageState extends State<MyCardsPage>
    with SingleTickerProviderStateMixin {
  double _rotationFactor = 0;
  late AnimationController _flipAnimationController;
  late Animation<double> _flipAnimation;
  late TextEditingController _cardNumberController,
      _cardHolderNameController,
      _cardExpiryController,
      _cvvController;
  late FocusNode _cvvFocusNode;
  late String _cardNumber = '';
  late String _cardHolderName = '';
  late String _cardExpiry = '';
  late String _cvvNumber = '';

  _MyCardsPageState() {
    _cardNumberController = TextEditingController();
    _cardHolderNameController = TextEditingController();
    _cardExpiryController = TextEditingController();
    _cvvController = TextEditingController();
    _cvvFocusNode = FocusNode();

    _cardNumberController.addListener(onCardNumberChange);
    _cardHolderNameController.addListener(() {
      _cardHolderName = _cardHolderNameController.text;
      setState(() {});
    });
    _cardExpiryController.addListener(() {
      _cardExpiry = _cardExpiryController.text;
      setState(() {});
    });
    _cvvController.addListener(() {
      _cvvNumber = _cvvController.text;
      setState(() {});
    });

    _cvvFocusNode.addListener(() {
      _cvvFocusNode.hasFocus
          ? _flipAnimationController.forward()
          : _flipAnimationController.reverse();
    });
  }

  @override
  void initState() {
    super.initState();
    _flipAnimationController =
        AnimationController(vsync: this, duration: Duration(milliseconds: 350));
    _flipAnimation =
        Tween<double>(begin: 0, end: 1).animate(_flipAnimationController)
          ..addListener(() {
            setState(() {});
          });
//    _flipAnimationController.forward();
  }

  void onCardNumberChange() {
    _cardNumber = _cardNumberController.text;
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(
            child: Text(
          'Donate Money',
          style: TextStyle(
              color: Colors.black,
              fontSize: 28,
              fontFamily: 'Poppins',
              fontWeight: FontWeight.w500),
        )),
        backgroundColor: Colors.white,
        elevation: 0,
      ),
      body: Center(
        child: Column(
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.only(left: 18.0, top: 10),
              child: Row(
                children: [
                  Text(
                    'Card Payment:',
                    style: TextStyle(fontSize: 20, fontFamily: 'Poppins'),
                  ),
                ],
              ),
            ),
            Transform(
              transform: Matrix4.identity()
                ..setEntry(3, 2, 0.001)
                ..rotateY(math.pi * _flipAnimation.value),
              origin: Offset(MediaQuery.of(context).size.width / 2, 0),
              child: _flipAnimation.value < 0.5
                  ? CardFrontView(
                      cardNumber: _cardNumber,
                      cardHolderName: _cardHolderName,
                      cardExpiry: _cardExpiry,
                      key: null,
                    )
                  : CardBackView(
                      cvvNumber: _cvvNumber,
                      key: null,
                    ),
            ),
            Expanded(
              flex: 1,
              child: Container(
                padding: EdgeInsets.all(16),
                height: double.infinity,
                child: SingleChildScrollView(
                  child: Column(
                    children: <Widget>[
//                      Slider(
//                        onChanged: (double value) {
//                          setState(() {
//                            _rotationFactor = value;
//                          });
//                        },
//                        value: _rotationFactor,
//                      ),
                      TextField(
                        controller: _cardNumberController,
                        maxLength: 16,
                        decoration: InputDecoration(
                          hintText: 'Card Number',
                        ),
                      ),
                      TextField(
                        controller: _cardHolderNameController,
                      ),
                      Row(
                        children: <Widget>[
                          Expanded(
                            flex: 2,
                            child: TextField(
                              controller: _cardExpiryController,
                            ),
                          ),
                          SizedBox(width: 16),
                          Expanded(
                            flex: 1,
                            child: TextField(
                              focusNode: _cvvFocusNode,
                              controller: _cvvController,
                              maxLength: 3,
                              decoration: InputDecoration(
                                  counterText: '', hintText: 'CVV'),
                            ),
                          ),
                        ],
                      ),
                      // Padding(
                      //   padding: const EdgeInsets.only(left: 110.0, top: 20),
                      //   child: Row(
                      //     children: [
                      //       Container(
                      //         height: 40,
                      //         width: 150,
                      //         decoration: BoxDecoration(
                      //             color: Colors.deepPurpleAccent,
                      //             borderRadius: BorderRadius.circular(20)),
                      //         child: Center(
                      //           child: Text(
                      //             'Pay Now',
                      //             style: TextStyle(
                      //                 color: Colors.white,
                      //                 fontSize: 20,
                      //                 fontFamily: 'Poppins'),
                      //           ),
                      //         ),
                      //       ),
                      //     ],
                      //   ),
                      // ),
                      SizedBox(
                        height: 20,
                      ),
                      SlideAction(
                        elevation: 0,
                        // innerColor: Colors.deepPurpleAccent,
                        outerColor: Colors.deepPurpleAccent,
                        text: 'Slide To Donate',
                        sliderButtonIcon: Icon(
                          Icons.lock_open,
                        ),
                        onSubmit: () {},
                      ),

                      Padding(
                        padding: const EdgeInsets.only(left: 110.0, top: 20),
                        child: Row(
                          children: [
                            Container(
                              height: 40,
                              width: 150,
                              decoration: BoxDecoration(
                                  color: Color.fromARGB(255, 85, 226, 226),
                                  borderRadius: BorderRadius.circular(20)),
                              child: Center(
                                child: InkWell(
                                  onTap: () {
                                    showModalBottomSheet(
                                        context: context,
                                        builder: (BuildContext context) {
                                          return Container(
                                            height: 300,
                                            decoration: BoxDecoration(
                                                image: DecorationImage(
                                                    image: AssetImage(
                                                        'lib/images/qr.png')),
                                                borderRadius: BorderRadius.only(
                                                    topLeft:
                                                        Radius.circular(20),
                                                    topRight:
                                                        Radius.circular(20))),
                                          );
                                        });
                                  },
                                  child: Text(
                                    'Pay by QR',
                                    style: TextStyle(
                                        color: Colors.white,
                                        fontSize: 20,
                                        fontFamily: 'Poppins'),
                                  ),
                                ),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
