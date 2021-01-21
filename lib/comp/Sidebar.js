import React, { Component } from 'react';
import { Text, Container, View, Thumbnail, Right, Button, ListItem, Icon as IconN, Left, Body, List } from 'native-base'
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconF from 'react-native-vector-icons/FontAwesome';
import material from '../../native-base-theme/variables/material';
import { user } from '../../dummy/data'

export default class Sidebar extends Component {
  render() {
    return (
      <Container>
        <View style={styles.header}>
          <Thumbnail source={{ uri: user.image }} style={styles.image} />
          <View style={styles.profile}>
            <Body style={{alignItems: 'flex-start'}}>
              <Text style={styles.name}>{user.name}</Text>
              <Text style={styles.number} note>{user.phone}</Text>
            </Body>
            <Right>
              <Button transparent>
                <IconN name='chevron-down-outline' style={styles.profileIcon} />
              </Button>
            </Right>
          </View>
        </View>
        <List style={styles.menuTop}>
          <ListItem icon noBorder style={styles.menu}>
            <Left>
              <Icon style={styles.iconMenu} name="users" />
            </Left>
            <Body>
              <Text style={styles.textMenu}>Group Baru</Text>
            </Body>
          </ListItem>
          <ListItem icon noBorder style={styles.menu}>
            <Left>
              <Icon style={styles.iconMenu} name="lock" />
            </Left>
            <Body>
              <Text style={styles.textMenu}>Secret Chat Baru</Text>
            </Body>
          </ListItem>
          <ListItem icon noBorder style={styles.menu}>
            <Left>
              <IconF style={styles.iconMenu} name="bullhorn" />
            </Left>
            <Body>
              <Text style={styles.textMenu}>Channel Baru</Text>
            </Body>
          </ListItem>
          <ListItem icon noBorder style={styles.menu}>
            <Left>
              <Icon style={styles.iconMenu} name="user" />
            </Left>
            <Body>
              <Text style={styles.textMenu}>Kontak</Text>
            </Body>
          </ListItem>
          <ListItem icon noBorder style={styles.menu}>
            <Left>
              <Icon style={styles.iconMenu} name="phone" />
            </Left>
            <Body>
              <Text style={styles.textMenu}>Panggilan</Text>
            </Body>
          </ListItem>
          <ListItem icon noBorder style={styles.menu}>
            <Left>
              <Icon style={styles.iconMenu} name="bookmark" />
            </Left>
            <Body>
              <Text style={styles.textMenu}>Pesan Tersimpan</Text>
            </Body>
          </ListItem>
          <ListItem icon noBorder style={styles.menu}>
            <Left>
              <Icon style={styles.iconMenu} name="settings" />
            </Left>
            <Body>
              <Text style={styles.textMenu}>Pengaturan</Text>
            </Body>
          </ListItem>
        </List>
        <List>
          <ListItem icon noBorder style={styles.menu}>
            <Left>
              <Icon style={styles.iconMenu} name="user-plus" />
            </Left>
            <Body>
              <Text style={styles.textMenu}>Undang Teman</Text>
            </Body>
          </ListItem>
          <ListItem icon noBorder style={styles.menu}>
            <Left>
              <Icon style={styles.iconMenu} name="help-circle" />
            </Left>
            <Body>
              <Text style={styles.textMenu}>FAQ Telegram</Text>
            </Body>
          </ListItem>
        </List>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingLeft: 15,
    paddingTop: 20,
    paddingBottom: 5,
    paddingRight: 0,
    backgroundColor: material.brandPrimary
  },
  image: {
    marginLeft: 5,
    height: 60,
    width: 60
  },
  profile: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  name: {
    color: '#fff',
    fontWeight: 'bold'
  },
  number: {
    color: '#fff',
    opacity: .7
  },
  menuTop: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#aaa',
    marginTop: 10
  },
  menu: {
    paddingVertical: 25
  },
  textMenu: {
    fontWeight: 'bold',
    marginLeft: 10
  },
  iconMenu: {
    color: '#aaa',
    fontSize: 25
  },
  profileIcon: {
    color: '#fff'
  }
})