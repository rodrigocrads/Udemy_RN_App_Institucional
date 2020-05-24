import React, { Component } from 'react';
import {
  View, StatusBar, StyleSheet, Image, Text
} from 'react-native';

import BarraSuperior from './BarraSuperior';

const detalheContato = require("../../imgs/detalhe_contato.png");
const cenaCorPrimaria = "#61BD8C";

export default class CenaContatos extends Component {
  render() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={cenaCorPrimaria} />
            <BarraSuperior 
                navigator={this.props.navigator} 
                voltar 
                backgroundColor={cenaCorPrimaria} 
            />

            <View style={ styles.cabecalho }>
                <Image source={ detalheContato } />
                <Text style={ styles.textTitulo }>Contatos</Text>
            </View>

            <View style={styles.detalheContato}>
                <Text style={styles.textContato}>TEL: (21) 3232-3232</Text>
                <Text style={styles.textContato}>CEL: (21) 99021-2121</Text>
                <Text style={styles.textContato}>E-MAIL: contato@gmail.com</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
    },
    cabecalho: {
        flexDirection: "row",
        marginTop: 20,
    },
    textTitulo: {
        fontSize: 30,
        color: "#61BD8C",
        fontWeight: "bold",
        textAlignVertical: "center",
        marginLeft: 20,
    },
    textContato: {
        fontSize: 18,
    },
    detalheContato: {
        padding: 20,
        marginTop: 15,
    },
});
