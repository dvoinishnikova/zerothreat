import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Switch,
  Alert,
  TextInput
} from 'react-native';
import {useState} from 'react'
import { useNavigation } from '@react-navigation/native';


function CountingButton() {
  const [presses, setPresses] = useState(0);

  return (
    <View>
      <Text style={styles.text}>Presses: {presses}</Text>
      <TouchableOpacity 
        onPress={() => setPresses(presses + 1)} 
        style={styles.button}
      >
        <Text>Press me!</Text>
      </TouchableOpacity>
    </View>
  )
}

function CustomButton(props) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text>{props.content}</Text>
    </TouchableOpacity>
  );
}

export default function ProfileScreen(props) {
  
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [nickName, setNickName] = useState(false);
  const [myName, setMyName] = useState("");
  const navigation = useNavigation();
  

   const handlePress = () => {
    Alert.alert("Hello!", "You pressed the button!"); }


  return (
      
    
    <View style={[styles.container, darkMode ? styles.dark : styles.light, nickName ? styles.name : styles.name]}>
    <Text>
        Hi, {props.name}!
    </Text>


      <CustomButton content={"Hello world"} />
      <CountingButton />
      <TouchableOpacity
        onPress={() => navigation.navigate("Second")}
        style={[styles.button, { backgroundColor: 'green', marginTop: 10 }]}
      >
        <Text style={{ color: 'white' }}>Go to Second Screen</Text>
      </TouchableOpacity>


      <Switch value={darkMode} onChange={() => setDarkMode(!darkMode)} /> 
      <Text>{darkMode ? "Dark Mode": "Not in Dark Mode"}</Text>

      <TextInput
        value={myName}
        onChangeName={setMyName}
        placeHolder={"Type here..."}
        />
        <Text>The user typed {myName}</Text>

      
        <Image
          source={require('../assets/crop-circle.png')}
          style={styles.image}
        />
            <TouchableOpacity
            style={styles.button}
            onPress={() => setLikes(likes + 1)} 
            >
            <Text>Like this image</Text>
            </TouchableOpacity>
            <Text style={styles.likesText}>
            The image has {likes} Likes
            </Text>

      


    
        



      <View style={styles.profileHeader}>
        <Image
          source={require('../assets/crop-circle.png')}
          style={styles.image}
        />
        
        <Switch value={nickName} onChange={() => setNickName(!nickName)} /> 
      <Text style={styles.name}>{nickName ? "Nickname": "Name"}</Text>
        <Text style={styles.bio}>Lorem ipsum dolor sit amet</Text>
      </View>
      
         <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Say Hello</Text>
          </TouchableOpacity>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button2} onPress={handlePress}>
              <Text style={styles.buttonText}>Say Hello</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={handlePress}>
              <Text style={styles.buttonText}>Say Hello</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={handlePress}>
              <Text style={styles.buttonText}>Say Hello</Text>
            </TouchableOpacity>

          </View>

          <TouchableOpacity style={styles.buttonLike} onPress={() => setLikes(likes+1)}>
            <Text style={styles.buttonText}>You have {likes} likes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonComments} onPress={() => setComments(comments+1)}>
            <Text style={styles.buttonText}>You have {comments} comments</Text>
          </TouchableOpacity>
          

          


      </View>

  );
}
 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'white',
    backgroundColor: '#C3F9C7',
    paddingTop: 60, 
  },

  profileHeader: {
    alignItems: 'center',
  },

  image: {
    height: 100,
    width: 100,
    borderRadius: 100,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 4,

  },
  large: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 4,
    
  },
  small: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 4,

  },

  

  bio: {
    fontSize: 14,
    color: 'black',
  },
  button: {
    backgroundColor: '#3399ff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  button2: {
    backgroundColor: '#3399ff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 10,
    width:100,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonLike: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 10,
  
  },
  buttonComments: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  dark: {
    backgroundColor: 'grey',
  },
  light: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
});
