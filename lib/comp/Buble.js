import React, { Component } from 'react';
import { Icon, Text, View } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { moderateScale } from 'react-native-size-matters';

export default class Buble extends Component {
  render() {
    const { me, data } = this.props

    if (me) {
      return (
        <View style={[styles.item, styles.itemOut]}>
          <View style={[styles.balloon, {backgroundColor: '#dbf8c6'}]}>
            <Text style={{paddingTop: 3}}>{data.chat}</Text>
            <View style={styles.boxTime}>
              <Text note>{data.time}</Text>
              <Icon name="checkmark-done-outline" style={[styles.icon, styles.iconRead]} />
            </View>
            <View
              style={[
                styles.arrowContainer,
                styles.arrowRightContainer,
              ]} >
              <Svg style={styles.arrowRight} width={moderateScale(15.5, 0.6)} height={moderateScale(17.5, 0.6)} viewBox="32.485 17.5 15.515 17.5"  enable-background="new 32.485 17.5 15.515 17.5">
                <Path
                  d="M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z"
                  fill="#dbf8c6"
                  x="0"
                  y="0"
                />
              </Svg>
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View style={[styles.item, styles.itemIn]}>
          <View style={[styles.balloon, styles.me]}>
            <Text style={{paddingTop: 5}}>{data.chat}</Text>
            <View style={styles.boxTime}>
              <Text note>{data.time}</Text>
            </View>
            <View
              style={[
                styles.arrowContainer,
                styles.arrowLeftContainer,
              ]}>

              <Svg style={styles.arrowLeft} width={moderateScale(15.5, 0.6)} height={moderateScale(17.5, 0.6)} viewBox="32.484 17.5 15.515 17.5"  enable-background="new 32.485 17.5 15.515 17.5">
                <Path
                  d="M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z"
                  fill="#fff"
                  x="0"
                  y="0"
                />
              </Svg>
            </View>
          </View>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  me: {
    backgroundColor: '#fff'
  },
  item: {
    marginVertical: moderateScale(3, 0),
    flexDirection: 'row'
  },
  itemIn: {
    marginLeft: 15
  },
  itemOut: {
    alignSelf: 'flex-end',
    marginRight: 15
  },
  balloon: {
    maxWidth: moderateScale(250, 2),
    paddingHorizontal: moderateScale(5, 2),
    paddingTop: moderateScale(2, 2),
    paddingBottom: moderateScale(13, 2),
    borderRadius: 8,
    minWidth: 80
  },
  arrowContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    flex: 1
  },
  arrowLeftContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },

  arrowRightContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  arrowLeft: {
    left: moderateScale(-6, 0.5),
  },

  arrowRight: {
    right: moderateScale(-6, 0.5),
  },
  boxTime: {
    position: 'absolute',
    right: 5,
    bottom: 3,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  icon: {
    fontSize: 16,
    marginLeft: 3
  },
  iconRead: {
    color: '#4fc3f7',
  }
});