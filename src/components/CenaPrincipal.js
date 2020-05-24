import React, { Component } from 'react';
import {
  View, StatusBar, StyleSheet, Image, TouchableHighlight
} from 'react-native';

import BarraSuperior from './BarraSuperior';

const logo = require("../../imgs/logo.png");
const menuCliente = require("../../imgs/menu_cliente.png");
const menuContato = require("../../imgs/menu_contato.png");
const menuEmpresa = require("../../imgs/menu_empresa.png");
const menuServico = require("../../imgs/menu_servico.png");

export default class CenaPrincipal extends Component {
  render() {
    return (
        <View>
            <StatusBar backgroundColor="#CCC" />

            <BarraSuperior />

            <View>
                <View style={styles.areaLogo}>
                    <Image source={logo} />
                </View>
                <View style={styles.menu}>
                    <View style={styles.divisaoBlocoMenu}>
                        <TouchableHighlight
                            underlayColor={"#B9C941"}
                            activeOpacity={0.3}
                            onPress={() => this.props.navigator.push({id: 'clientes'})}
                        >
                            <Image style={styles.menuImage} source={menuCliente} />
                        </TouchableHighlight>

                        <TouchableHighlight
                            underlayColor={"#61BD8C"}
                            activeOpacity={0.3}
                            onPress={() => this.props.navigator.push({id: 'contatos'})}
                        >
                            <Image style={styles.menuImage} source={menuContato} />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.divisaoBlocoMenu}>
                        <TouchableHighlight
                            underlayColor={"#EC7148"}
                            activeOpacity={0.3}                        
                            onPress={() => this.props.navigator.push({id: 'empresa'})}
                        >
                            <Image style={styles.menuImage} source={menuEmpresa} />
                        </TouchableHighlight>

                        <TouchableHighlight
                            underlayColor={"#19D1C8"}
                            activeOpacity={0.3}
                            onPress={() => this.props.navigator.push({id: 'servicos'})}
                        >
                            <Image style={styles.menuImage} source={menuServico} />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    areaLogo: {
        marginVertical: 20,
        alignItems: "center"
    },
    divisaoBlocoMenu: {
       flexDirection: "row"
    },
    menuImage: {
        margin: 15
    },
    menu: {
        alignItems: "center"
    }
});
