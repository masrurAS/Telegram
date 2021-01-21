import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, ListItem, Left, Thumbnail, Body, Badge, View } from 'native-base'

export default class Conversations extends Component {
  getData() {
    const data = this.props.data
    const chat = data.chat.substr(0, 46) + (data.chat.length > 46 ? ' ...' : '');
    return {
      ...data,
      chat
    };
  }

  render() {
    const data = this.getData();
    const { goToChat } = this.props

    return (
      <ListItem avatar button onPress={goToChat}>
        <Left>
          <Thumbnail source={{ uri: data.photo }} />
        </Left>
        <Body style={styles.body}>
          <View style={styles.main}>
            <Text>{data.name}</Text>
            <Text note>{data.chat}</Text>
          </View>
          <View style={styles.desc}>
            <Text note style={styles.time} >{data.time}</Text>

            {
              (data.unread > 0) ? 
              <Badge success style={styles.unread}>
                <Text>2</Text>
              </Badge> :
              null
            }

          </View>
        </Body>
      </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  main: {
    flex: 1
  },
  desc: {
    paddingRight: 10,
    alignItems: 'center'
  },
  time: {
    marginBottom: 5
  },
  unread: {
    alignSelf: 'center'
  }
})