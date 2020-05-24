import React, { Component } from 'react';
import {
  View, StatusBar, StyleSheet, Image, Text
} from 'react-native';

import BarraSuperior from './BarraSuperior';

const detalheEmpresa = require("../../imgs/detalhe_empresa.png");
const cenaCorPrimaria = "#EC7148";

export default class CenaEmpresa extends Component {
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
                <Image source={ detalheEmpresa } />
                <Text style={ styles.textTitulo }>A Empresa</Text>
            </View>

            <View style={styles.detalheContato}>
                <Text style={styles.textEmpresa}>A ATM Consultoria está no mercado a mais de 20 anos, prestando serviços com excelência.</Text>
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
        color: "#EC7148",
        fontWeight: "bold",
        textAlignVertical: "center",
        marginLeft: 20,
    },
    textEmpresa: {
        fontSize: 18,
    },
    detalheContato: {
        padding: 20,
        marginTop: 15,
    },
});
