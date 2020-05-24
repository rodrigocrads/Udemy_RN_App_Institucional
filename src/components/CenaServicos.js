import React, { Component } from 'react';
import {
  View, StatusBar, StyleSheet, Image, Text
} from 'react-native';

import BarraSuperior from './BarraSuperior';

const detalheServico = require("../../imgs/detalhe_servico.png");
const cenaCorPrimaria = "#19D1C8";

export default class CenaServicos extends Component {
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
                <Image source={ detalheServico } />
                <Text style={ styles.textTitulo }>Nossos Serviços</Text>
            </View>

            <View style={styles.detalheContato}>
                <Text style={styles.textServicos}>- Consultoria</Text>
                <Text style={styles.textServicos}>- Processos</Text>
                <Text style={styles.textServicos}>- Acompanhamento de Processos</Text>
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
        color: "#19D1C8",
        fontWeight: "bold",
        textAlignVertical: "center",
        marginLeft: 20,
    },
    textServicos: {
        fontSize: 18,
    },
    detalheContato: {
        padding: 20,
        marginTop: 15,
    },
});
