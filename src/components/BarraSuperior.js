import React, { Component } from 'react';
import {
  Text, View, StyleSheet, Image, TouchableHighlight
} from 'react-native';

const btnVoltar = require("../../imgs/btn_voltar.png");

export default class BarraSuperior extends Component {
  renderBtnVoltar() {
    if (this.props.voltar) { 
      return (
        <TouchableHighlight onPress={() => {
          this.props.navigator.pop()
        }}>
          <Image source={ btnVoltar } />
        </TouchableHighlight>
      );
    }
  }

  render() {
    const corFundo = this.props.backgroundColor || "#CCC";

    return (
      <View style={{backgroundColor: corFundo, padding: 10, height: 60, flexDirection: "row"}}>
          { this.renderBtnVoltar() }
          <Text style={ styles.titulo }>ATM Consultoria</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    titulo: {
        flex: 1,
        fontSize: 18,
        textAlign: "center",
      }
});
