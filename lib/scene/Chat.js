import React, { Component } from 'react';
import { List, Header, Left, Button, Icon, Body, Thumbnail, Right, Container, Title, Subtitle, View, Content, Footer, Input } from 'native-base';
import { StyleSheet } from 'react-native';
import Buble from '../comp/Buble';
import { chats as chats_dummy } from '../../dummy/data';

export class HeaderChat extends React.Component {
  render() {
    const { navigation, data } = this.props;

    return (
      <Header>
        <Left>
          <Button transparent onPress={navigation.goBack}>
            <Icon name='arrow-back-outline' />
          </Button>
        </Left>
        <Body style={styles.headerBody}>
          <View>
            <Thumbnail style={styles.photo} source={{ uri: data.photo }} />
          </View>
          <View>
            <Title style={styles.name}>{data.name}</Title>
            <Subtitle>terakhir terlihat pada {data.time}</Subtitle>
          </View>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='ellipsis-vertical' />
          </Button>
        </Right>
      </Header>
    );
  }
}

export default class Chat extends Component {
  constructor() {
    super();
    this.state = {
      chats: chats_dummy,
      text: ""
    }
  }

  pushChat() {
    const { chats, text } = this.state;
    const now = new Date();

    if (text == "") return;

    chats.push({
      id: chats.length+1,
      chat: text,
      time: `${now.getHours()}:${now.getMinutes()}`,
      me: true
    })

    this.setState({
      chats,
      text: ""
    });
  }

  render() {
    const { data } = this.props.route.params
    const showSend = this.state.text != "";
    
    return (
      <Container>
        <HeaderChat navigation={this.props.navigation} data={data} />
        <Content style={styles.chatBox}>
          <List dataArray={this.state.chats} renderRow={row => <Buble data={row} me={row.me} />} style={styles.list} />
        </Content>
        <Footer style={styles.chattingBox}>
          <Button transparent style={styles.buttonIcon}>
            <Icon name="happy-outline" style={styles.icon} />
          </Button>
          <Input placeholder="Pesan" style={styles.input} value={this.state.text} onChangeText={text => this.setState({ text })} />
          <Button transparent style={styles.buttonIcon}>
            <Icon name="attach-outline" style={[styles.icon, { display: showSend ? 'none' : 'flex' }]} />
          </Button>
          <Button transparent style={styles.buttonIcon}>
            <Icon name="mic-outline" style={[styles.icon, { display: showSend ? 'none' : 'flex' }]} />
          </Button>
          <Button transparent style={styles.buttonIcon} onPress={this.pushChat.bind(this)}>
            <Icon name="send" style={[styles.icon, {color: '#4fc3f7', fontSize: 24, display: showSend ? 'flex' : 'none'}]} />
          </Button>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  chatBox: {
    backgroundColor: '#c8d9ea',
    paddingVertical: 10
  },
  list: {
    paddingBottom: 30
  },
  headerBody: {
    flexDirection: 'row'
  },
  photo: {
    height: 40,
    width: 40,
    marginRight: 10
  },
  name: {
    color: '#fff',
    fontWeight: 'bold'
  },
  chattingBox: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 8
  },
  buttonIcon: {
    alignSelf: 'center'
  },
  icon: {
    color: '#808080',
    fontSize: 25
  },
  input: {
    fontSize: 20
  }
})