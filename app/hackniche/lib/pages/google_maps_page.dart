// ignore_for_file: prefer_const_constructors, unnecessary_new, unused_local_variable, prefer_typing_uninitialized_variables, unused_import, prefer_collection_literals

import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:http/http.dart';

class MapScreen extends StatefulWidget {
  const MapScreen({super.key});

  @override
  State<MapScreen> createState() => _MapScreenState();
}

// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=19.126188,72.834575&radius=50000&keyword=recycle&key=AIzaSyD9VI4OdMbtz9zNyDdGWL-Q9dM_qv_hW_4

class _MapScreenState extends State<MapScreen> {
  late GoogleMapController mapController; //contrller for Google map
  final Set<Marker> markers =
      new Set(); //markers for google map; //markers for google map
  static const LatLng showLocation = LatLng(19.11, 72.84);

  Set<Marker> getmarkers() {
    //markers to place on map
    setState(() {
      markers.add(Marker(
        //add first marker
        markerId: MarkerId("1"),
        position: LatLng(19.1127312, 72.847886), //position of marker
        infoWindow: InfoWindow(
          //popup info
          title: 'Momento',
          snippet:
              '16-a/ Kalpita Enclave, Sahar Road, Andheri East, Andheri East, Mumbai',
        ),
        icon: BitmapDescriptor.defaultMarker, //Icon for Marker
      ));

      markers.add(Marker(
        //add second marker
        markerId: MarkerId("2"),
        position: LatLng(19.1046375, 72.8451591), //position of marker
        infoWindow: InfoWindow(
          //popup info
          title: 'Zee Novelties',
          snippet:
              'near Parle Biscuit Factory, Shop no. 101, Anand Amrut, near Parle Biscuit Factory, Tejpal Road, Mumbai',
        ),
        icon: BitmapDescriptor.defaultMarker, //Icon for Marker
      ));

      markers.add(Marker(
        //add third marker
        markerId: MarkerId("3"),
        position: LatLng(19.1002164, 72.845686), //position of marker
        infoWindow: InfoWindow(
          //popup info
          title: 'Relaince smart Bazaar',
          snippet:
              'Parle Square Mall, near Dinanath Mangeshkar Natyagruha, Monghibai Road, Vile Parle East, Vile Parle, Mumbai',
        ),
        icon: BitmapDescriptor.defaultMarker, //Icon for Marker
      ));
      markers.add(Marker(
        //add third marker
        markerId: MarkerId("4"),
        position: LatLng(19.0982557, 72.8443767), //position of marker
        infoWindow: InfoWindow(
          //popup info
          title: 'Parlekar Masalas Super Market',
          snippet:
              'Shop : 15/16, Vanmalidas Compound, 53-a, Tejpal Road, Vile Parle East, Mumbai',
        ),
        icon: BitmapDescriptor.defaultMarker, //Icon for Marker
      ));
      markers.add(Marker(
        //add third marker
        markerId: MarkerId("5"),
        position: LatLng(19.1099593, 72.8332813), //position of marker
        infoWindow: InfoWindow(
          //popup info
          title: 'Priya Super Stores',
          snippet:
              'Shop Number 1 & 2, BMC Market, North South Road Number 6, JVPD Scheme, Vile Parle West, Mumbai',
        ),
        icon: BitmapDescriptor.defaultMarker, //Icon for Marker
      ));
      markers.add(Marker(
        //add third marker
        markerId: MarkerId("6"),
        position: LatLng(19.1109778, 72.8410973), //position of marker
        infoWindow: InfoWindow(
          //popup info
          title: 'Gupta Chana Shop',
          snippet:
              '4R6R+9CX, Swami Vivekananda Road, New Sarvottam Society, Irla Bridge, Vile Parle West, Mumbai',
        ),
        icon: BitmapDescriptor.defaultMarker, //Icon for Marker
      ));

      //add more markers here
    });

    return markers;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: Icon(Icons.arrow_back_ios),
        title: Text("Nearby Distribution Centers"),
        backgroundColor: Color.fromARGB(255, 64, 255, 182),
      ),
      body: GoogleMap(
        //Map widget from google_maps_flutter package
        zoomGesturesEnabled: true, //enable Zoom in, out on map
        initialCameraPosition: CameraPosition(
          //innital position in map
          target: showLocation, //initial position
          zoom: 15.0, //initial zoom level
        ),
        markers: getmarkers(), //markers to show on map
        mapType: MapType.normal, //map type
        onMapCreated: (controller) {
          //method called when map is created
          setState(() {
            mapController = controller;
          });
        },
      ),
    );
  }
}
