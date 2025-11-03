import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Checkbox,
  Button,
  Alert,
  Image
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import SowetoMap from './vilakazi.png';
import SandtonMap from './sandton.png';
import MidrandMap from './midrand.png';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

//Reusable Headers//
function HeaderMenu({ navigation }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={28} color="black" />
      </TouchableOpacity>
      <Ionicons name="leaf-outline" size={28} color="green" />
    </View>
  );
}
function HeaderBack({ navigation }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>
      <Ionicons name="leaf-outline" size={28} color="green" />
    </View>
  );
}

//Home//
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <HeaderMenu navigation={navigation} />

      <Text style={styles.title}>Empowering The Nation</Text>
      <Text style={styles.subtitle}>
        We provide practical skills training to uplift domestic workers and gardeners.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SixWeekCourses')}
      >
        <Text style={styles.buttonText}>Six-Week Courses ></Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SixMonthCourses')}
      >
        <Text style={styles.buttonText}>Six-Month Courses ></Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CalculateFees')}
      >
        <Text style={styles.buttonText}>Calculate Total Fees ></Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Contact')}
      >
        <Text style={styles.buttonText}>Contact ></Text>
      </TouchableOpacity>
    </View>
  );
}

//Six-Week list//
function SixWeekCoursesScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <HeaderMenu navigation={navigation} />

      <Text style={styles.title}>Six-Week Courses</Text>
      <Text style={styles.subtitle}>Here you will find available courses:</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ChildMinding')}
      >
        <Text style={styles.buttonText}>Child Minding ></Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Cooking')}
      >
        <Text style={styles.buttonText}>Cooking ></Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GardenMaintenance')}
      >
        <Text style={styles.buttonText}>Garden Maintenance > </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

//Six-Month list//
function SixMonthCoursesScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <HeaderMenu navigation={navigation} />

      <Text style={styles.title}>Six-Month Courses</Text>
      <Text style={styles.subtitle}>Explore our professional six-month training programs:</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FirstAid')}
      >
        <Text style={styles.buttonText}>First Aid > </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Sewing')}
      >
        <Text style={styles.buttonText}>Sewing > </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Landscaping')}
      >
        <Text style={styles.buttonText}>Landscaping > </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LifeSkills')}
      >
        <Text style={styles.buttonText}>Life Skills > </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

//Course Detail component//
function CourseDetail({ navigation, title, description, duration, cost }) {
  return (
    <View style={styles.container}>
      <HeaderBack navigation={navigation} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{description}</Text>
      <Text style={styles.detail}>Duration: {duration}</Text>
      <Text style={styles.detail}>Cost: {cost}</Text>
    </View>
  );
}
//Child minding//
function ChildMindingScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Ionicons name="leaf-outline" size={28} color="green" />
      </View>

      <Text style={styles.title}>ChildMinding</Text>
      <Text style={styles.subtitle}>Fees: R750</Text>
      <Text style={styles.text}>Purpose: To provide basic child and baby care.</Text>
      <Text style={styles.subtitle}>Content:</Text>
      <Text style={styles.text}>• Birth to six-month old baby needs</Text>
      <Text style={styles.text}>• seven-month to one year old needs </Text>
      <Text style={styles.text}>• Toddler needs</Text>
      <Text style={styles.text}>• Educational toys</Text>
    </ScrollView>
  );
}
//CookingScreen//
function CookingScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Ionicons name="leaf-outline" size={28} color="green" />
      </View>

      <Text style={styles.title}>Cooking</Text>
      <Text style={styles.subtitle}>Fees: R750</Text>
      <Text style={styles.text}>Purpose: To prepare and cook nutritious family meals.</Text>
      <Text style={styles.subtitle}>Content:</Text>
      <Text style={styles.text}>• Nutritional requirements for a healthy body</Text>
      <Text style={styles.text}>• Types of protein, carbohydrates and vegetables </Text>
      <Text style={styles.text}>• Planning meals</Text>
      <Text style={styles.text}>• Tasty and nutritious recipes</Text>
      <Text style={styles.text}>• Respiratory distress e.g. Preparation and cooking of meals</Text>
    </ScrollView>
  );
}
//GardenMaintenanceScreen//
function GardenMaintenanceScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Ionicons name="leaf-outline" size={28} color="green" />
      </View>

      <Text style={styles.title}>GardenMaintenance</Text>
      <Text style={styles.subtitle}>Fees: R750</Text>
      <Text style={styles.text}>Purpose: To provide Basic knowledge of watering, pruning and planting in a domestic garden.</Text>
      <Text style={styles.subtitle}>Content:</Text>
      <Text style={styles.text}>• Water restrictions and the watering requirements of indigenous and exotic plants </Text>
      <Text style={styles.text}>• pruning and propagation of plants </Text>
      <Text style={styles.text}>• planting techniques for different plant types</Text>
    </ScrollView>
  );
}

// FirstAidScreen //
function FirstAidScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Ionicons name="leaf-outline" size={28} color="green" />
      </View>

      <Text style={styles.title}>FirstAid</Text>
      <Text style={styles.subtitle}>Fees: R1500</Text>
      <Text style={styles.text}>Purpose: To provide First Aid awareness and
      basic life support.</Text>
      <Text style={styles.subtitle}>Content:</Text>
      <Text style={styles.text}>• Wounds and bleeding</Text>
      <Text style={styles.text}>• Burns and fractures </Text>
      <Text style={styles.text}>• Emergency scene management</Text>
      <Text style={styles.text}>• Cardio-pulmonary Resuscitation (CPR)</Text>
      <Text style={styles.text}>• Respiratory distress e.g. Chocking, blocked airway</Text>
    </ScrollView>
  );
}

// Sewing Course Details//
function SewingScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Ionicons name="leaf-outline" size={28} color="green" />
      </View>

      <Text style={styles.title}>Sewing</Text>
      <Text style={styles.subtitle}>Fees: R1500</Text>
      <Text style={styles.text}>Purpose: To provide alterations and new garment tailoring services.</Text>
      <Text style={styles.subtitle}>Content:</Text>
      <Text style={styles.text}>• Types of stitches</Text>
      <Text style={styles.text}>• Threading a sewing machine</Text>
      <Text style={styles.text}>• Sewing buttons, zips, hems and seams</Text>
      <Text style={styles.text}>• Alterations</Text>
      <Text style={styles.text}>• Designing and sewing new garments</Text>
    </ScrollView>
  );
}
// Landscaping Course Details//
function LandscapingScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Ionicons name="leaf-outline" size={28} color="green" />
      </View>

      <Text style={styles.title}>Landscaping</Text>
      <Text style={styles.subtitle}>Fees: R1500</Text>
      <Text style={styles.text}>Purpose: To provide landscaping services for new and established gardens.</Text>
      <Text style={styles.subtitle}>Content:</Text>
      <Text style={styles.text}>• Indigenous and exotic plants and trees</Text>
      <Text style={styles.text}>• Fixed structures (fountains, statues, benches, tables, built-in braai)</Text>
      <Text style={styles.text}>• Balancing of plants and trees in a garden</Text>
      <Text style={styles.text}>• Aesthetics of plant shapes and colours</Text>
      <Text style={styles.text}>• Garden layout</Text>
    </ScrollView>
  );
}
// Life Skills Course Details//
function LifeSkillsScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Ionicons name="leaf-outline" size={28} color="green" />
      </View>

      <Text style={styles.title}>Life Skills</Text>
      <Text style={styles.subtitle}>Fees: R1500</Text>
      <Text style={styles.text}>Purpose: To provide skills to navigate basic life necessities.</Text>
      <Text style={styles.subtitle}>Content:</Text>
      <Text style={styles.text}>• Opening a bank account</Text>
      <Text style={styles.text}>• Basic labour law (know your rights)</Text>
      <Text style={styles.text}>• Basic reading and writing literacy</Text>
      <Text style={styles.text}>• Basic numeric literacy</Text>
    </ScrollView>
  );
}
//Contact//
function ContactScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={28} color="black" />
        </TouchableOpacity>
        <Ionicons name="leaf-outline" size={28} color="green" />
      </View>

      <Text style={styles.title}>Contact Us</Text>

      <Text style={styles.subtitle}>Business contact info:</Text>
      <View style={styles.infoBox}>
        <Text style={styles.infoItem}>• Phone: 012 345 6789</Text>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:info@empoweringthenation.co.za')}>
          <Text style={[styles.infoItem, { color: 'blue', textDecorationLine: 'underline' }]}>
            • Email: info@empoweringthenation.co.za
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Venues:</Text>

      {/* Soweto */}
      <View style={styles.venue}>
        <Text style={styles.venueTitle}>Soweto: 123 Vilakazi Street</Text>
        <Image source = {SowetoMap} style = {styles.map}
        />
      </View>

      {/* Sandton */}
      <View style={styles.venue}>
        <Text style={styles.venueTitle}>Sandton: 45 Katherine Drive</Text>
        <Image source = {SandtonMap}style={styles.map}
        />
      </View>

      {/*Midrand*/}
      <View style={styles.venue}>
        <Text style={styles.venueTitle}>Midrand: 77 New Road</Text>
        <Image source = {MidrandMap} style={styles.map} 
        />
      </View>
    </ScrollView>
  );
}

//Calculate Fees with discount logic //
function CalculateFeesScreen({ navigation }) {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const courses = [
    { id: 1, name: 'Child Minding', fee: 750 },
    { id: 2, name: 'Cooking', fee: 750 },
    { id: 3, name: 'Garden Maintenance', fee: 750 },
    { id: 4, name: 'Sewing', fee: 1500 },
    { id: 5, name: 'Landscaping', fee: 1500 },
    { id: 6, name: 'Life Skills', fee: 1500 },
  ];

   const toggleCourse = (course) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter(c => c !== course));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const calculateTotal = () => {
    const subtotal = selectedCourses.reduce((sum, c) => sum + c.fee, 0);
    let discount = 0;

    if (selectedCourses.length === 2) discount = 0.05;
    else if (selectedCourses.length === 3) discount = 0.10;
    else if (selectedCourses.length > 3) discount = 0.15;

    const total = subtotal - subtotal * discount;
    return { subtotal, discount: discount * 100, total };
  };

  const { subtotal, discount, total } = calculateTotal();

  const confirmRegistration = () => {
    if (!name || !phone || !email) {
      Alert.alert('Missing Information', 'Please fill in your name, phone number, and email address.');
      return;
    }
    if (selectedCourses.length === 0) {
      Alert.alert('No Courses Selected', 'Please select at least one course.');
      return;
    }

    Alert.alert(
      'Registration Confirmed',
      `Thank you, ${name}!\n\nYou have registered for ${selectedCourses.length} course(s).\nTotal fee after discount: R${total}\n\nWe’ll contact you at ${email} or ${phone}.`
    );
    //Reset all fields and selections after confirmation//
    setSelectedCourses([]);
    setName('');
    setPhone('');
    setEmail(''); 
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={28} color="black" />
        </TouchableOpacity>
        <Ionicons name="leaf-outline" size={28} color="green" />
      </View>

      <Text style={styles.title}>Calculate Total Fees</Text>
      <Text style={styles.subtitle}>Enter your details and select courses below:</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.subtitle}>Select Courses:</Text>
      {courses.map((course) => {
        const isSelected = selectedCourses.includes(course);
        return (
          <TouchableOpacity
            key={course.id}
            style={[
              styles.courseButton,
              isSelected && { backgroundColor: '#d4f5d4' },
            ]}
            onPress={() => toggleCourse(course)}
          >
            <Text style={styles.courseText}>{course.name} — R{course.fee}</Text>
            {isSelected && <Ionicons name="checkmark-circle" size={24} color="green" />}
          </TouchableOpacity>
        );
      })}

      <View style={styles.resultBox}>
        <Text style={styles.resultText}>Subtotal: R{subtotal}</Text>
        <Text style={styles.resultText}>Discount: {discount}%</Text>
        <Text style={[styles.resultText, { fontWeight: 'bold' }]}>Total: R{total}</Text>
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={confirmRegistration}>
        <Ionicons name="checkmark-done-circle" size={22} color="white" />
        <Text style={styles.confirmText}>Confirm Registration</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

//Drawer Navigator //
function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="SixWeekCourses" component={SixWeekCoursesScreen} />
      <Drawer.Screen name="SixMonthCourses" component={SixMonthCoursesScreen} />
      <Drawer.Screen name="CalculateFees" component={CalculateFeesScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
    </Drawer.Navigator>
  );
}

//App (wrap gesture handler)//
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
          {/* 6-week details */}
          <Stack.Screen name="ChildMinding" component={ChildMindingScreen} />
          <Stack.Screen name="Cooking" component={CookingScreen} />
          <Stack.Screen name="GardenMaintenance" component={GardenMaintenanceScreen} />
          {/* 6-month details */}
          <Stack.Screen name="FirstAid" component={FirstAidScreen} />
          <Stack.Screen name="Sewing" component={SewingScreen} />
          <Stack.Screen name="Landscaping" component={LandscapingScreen} />
          <Stack.Screen name="LifeSkills" component={LifeSkillsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

//Styles//
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 40,
    paddingHorizontal: 5,

  },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subtitle: { textAlign: 'center', fontSize: 16, color: '#444', marginBottom: 12 },
  detail: { fontSize: 16, textAlign: 'center', color: '#555', marginBottom: 8 },
  button: {
    backgroundColor: '#e0e0e0',
    padding: 14,
    borderRadius: 10,
    marginVertical: 8,
  },
  buttonText: {
     textAlign: 'center', fontSize: 16
      },
  total: { fontSize: 20,fontWeight: 'bold', textAlign: 'center',marginTop: 18, color: 'green'},

  map: {
  width: '100%',
  height: 150,
  borderRadius: 10,
  resizeMode: 'cover', 
  marginTop: 5,
},
});











