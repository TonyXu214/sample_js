import React, { Component } from 'react';
import { 
    View, 
    StyleSheet, 
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';
import { getMascotInfo, decrementTreatCount } from '../api/PetAPI';
import PetImages from '../images/Pet_Index';


export default class MascotScreen extends Component {

  static navigationOptions = {
    title: 'Brightside',
    headerTitleStyle: {
      fontSize: 24,
    },
  };

  constructor() {
    super();

    this.state = {
      treats: 0,
      engagement: 0,
      pose: '',
    };

    /*
    this.handleMascotInformation = this.handleMascotInformation.bind(this);
    this.handleTreat = this.handleTreat.bind(this);
    */
  }

  /*
  componentDidMount(){
    getMascotInfo(this.handleMascotInformation);
  }
  

  handleMascotInformation(info) {
    var treats = info['treats'];
    var engagement = info['engagement'];
    this.setState({treats: treats, engagement: engagement});
    if (this.state.engagement > 60) {
      this.setState({pose: require('../images/Pet_Activity_2.png')});
    } else {
      this.setState({pose: require('../images/Pet_Sad_1.png')});
    }
  }

  handleTreat(){
    decrementTreatCount(this.state.engagement, this.state.treats);
  }
  */

  render() {
    return (
      <View style={{flex: 1, alignContent: 'center'}}>
        <View style={styles.nameContainer}>
          <View style={styles.rectangleView}>
            <Text style={styles.nameText}>COCO</Text>
          </View>
        </View>
        <Image style={styles.petContainer} resizeMode='contain' source={this.state.pose ? this.state.pose : null}/>
        <View style={styles.statusContainer}>
          <View style={styles.happinessCountContainer}>
            <TouchableOpacity style={styles.Circle}>
                <View style={styles.textSquare}>
                  <Text style={styles.numberText}>{this.state.engagement}</Text>
                </View>              
            </TouchableOpacity>
          </View>
          <View style={styles.treatCountContainer}>
            <TouchableOpacity style={styles.Circle} onPress={this.handleTreat}>
              <View style={styles.textSquare}>
                <Text style={styles.numberText}>{this.state.treats}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: 'center',
    flex: 1,
  },

  petContainer: {
    width: 400,
    height: 400,
  },

  nameContainer: {
    flexDirection: 'row',
    height: 20,
    paddingTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  nameText: {
    fontSize: 30,
    color: 'white',
  },

  rectangleView: {
    backgroundColor: '#5C51D6',
    height: 50,
    width: 320,
    bottom: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  statusContainer: {
    flexDirection: 'row',
    height: 400,
  },

  treatCountContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#5C51D6',
    bottom: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textSquare: {
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },

  numberText: {
    fontSize: 45,
    color: '#5C51D6',
  },

  happinessCountContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});