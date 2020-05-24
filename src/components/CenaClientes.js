import React, { Component } from 'react';
import {
  View, StatusBar, StyleSheet, Image, Text
} from 'react-native';

import BarraSuperior from './BarraSuperior';

const detalhesCliente = require("../../imgs/detalhe_cliente.png");
const cliente1 = require("../../imgs/cliente1.png");
const cliente2 = require("../../imgs/cliente2.png");

const cenaCorPrimaria = "#B9C941";

export default class CenaClientes extends Component {
  render() {
    return (
        <View style={ styles.container }>
            <StatusBar backgroundColor={cenaCorPrimaria} />
            <BarraSuperior 
                navigator={this.props.navigator} 
                voltar 
                backgroundColor={cenaCorPrimaria} 
            />

            <View style={ styles.cabecalho }>
                <Image source={ detalhesCliente } />
                <Text style={styles.textTitulo}>Nossos Clientes</Text>
            </View>

            <View style={styles.detalheCliete}>
                <Image source={cliente1} />
                <Text style={styles.textDetalheCliente}>Lorem ipsum Lorem ipsum</Text>
            </View>

            <View style={styles.detalheCliete}>
                <Image source={cliente2} />
                <Text style={styles.textDetalheCliente}>Lorem ipsum Lorem ipsum</Text>
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
        color: cenaCorPrimaria,
        marginLeft: 10,
        marginTop: 25,
    },
    detalheCliete: {
        padding: 20,
        marginTop: 15,
    },
    textDetalheCliente: {
        fontSize: 18,
        marginLeft: 20,
        marginTop: 5,
        color: "#00F"
    }
});
