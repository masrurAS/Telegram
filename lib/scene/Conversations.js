import React, { Component } from 'react';
import { Container, List, Button, Icon, Header, Left, Body, Right, Title, Content } from 'native-base';
import Conversation from '../comp/Conversation';
import data, { conversations } from '../../dummy/data';
import { StyleSheet } from 'react-native';

export class HeaderConversation extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Header>
        <Left>
          <Button transparent onPress={navigation.openDrawer}>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title style={styles.title}>Telegram</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='search' />
          </Button>
        </Right>
      </Header>
    );
  }
}

export default class Conversations extends Component {
  goToChat(data) {
    this.props.navigation.navigate('Chat', {data});
  }

  render() {
    return (
      <Container>
        <HeaderConversation navigation={this.props.navigation} />
        <List dataArray={conversations} renderRow={data => <Conversation data={data} goToChat={() => this.goToChat(data)} />} />
        <Button primary rounded style={styles.button_new}>
          <Icon name='pencil' style={styles.button_icon} />
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold'
  },
  button_new: {
    height: 55,
    width: 55,
    padding: 1,
    position: 'absolute',
    bottom: 15,
    right: 15
  },
  button_icon: {
    fontSize: 22
  } 
});