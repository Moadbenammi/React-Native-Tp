import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export class ListItem extends React.PureComponent {
  _itemAppuye = () => {
    this.props.onPressItem(this.props.index);
  };
  render() {
    const item = this.props.item;
    return (
      <TouchableHighlight onPress={this._itemAppuye} underlayColor="#eedddd">
        <View>
          <View style={styles.conteneurLigne}>
            <View style={styles.conteneurTexte}>
              <Text style={styles.nom}>{item.name}</Text>
              <Text style={styles.region}>{item.region}</Text>
              <Text style={styles.region}>{item.subregion}</Text>
              <Text style={styles.region}>{item.capital}</Text>
              <Text style={styles.region}>{item.population}</Text>
            </View>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  conteneurTexte: {
    flex: 1,
  },
  separateur: {
    height: 1,
    backgroundColor: '#eedded',
  },
  nom: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#58BEEC',
  },
  region: {
    fontSize: 20,
    color: '#656565',
  },
  conteneurLigne: {
    flexDirection: 'row',
    padding: 10,
  },
});
