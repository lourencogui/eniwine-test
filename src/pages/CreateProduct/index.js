import React, { Component } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, Picker,
} from 'react-native';
import { store } from '~/store';
import { eniWineApi } from '~/services/eniWineApi';

import styles from './styles';

class CreateProduct extends Component {
  static navigationOptions = () => ({
    title: 'Novo Produto',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 24,
      color: '#FFF',
    },
    headerStyle: {
      backgroundColor: '#ba0075',
      height: 80,
    },
    headerTintColor: '#fff',
  });

  state = {
    name: '',
    type: '',
    description: '',
    size: 0,
    price: 0,
    available: 0,
    types: [],
  };


  componentDidMount() {
    this.getProductType();
  }

  getProductType = async () => {
    try {
      const response = await eniWineApi.get('productTypes', {
        headers: {
          Authorization: `bearer ${store.getState().login.token}`,
        },
      });
      this.setState({ types: response.data });
    } catch (error) {
      console.tron.log(`${error}`);
    }
  }

  getTypeId = (selectedType) => {
    const type = this.state.types.find(item => item.name === this.state.type);
    return type.id;
  }

  create = async () => {
    try {
      const product = {
        name: this.state.name,
        description: this.state.description,
        product_type_id: this.getTypeId(this.state.type),
        size: parseInt(this.state.size, 10),
        price: parseFloat(this.state.price),
        available: parseInt(this.state.available, 10),
      };

      const form = new FormData();
      form.append('product', JSON.stringify(product));
      const response = await eniWineApi.post('products', form, {
        headers: {
          Authorization: `bearer ${store.getState().login.token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.tron.log(response.data);
    } catch (error) {
      console.tron.log(`${error}`);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Informe o nome do produto"
          value={this.state.name}
          autoCorrect={false}
          placeholderTextColor="#bbb"
          autoCapitalize="none"
          keyboardType="default"
          onChangeText={name => this.setState({ name })}
          returnKeyType="next"
        />
        <TextInput
          style={styles.input}
          placeholder="Forneça uma descrição"
          value={this.state.description}
          autoCorrect={false}
          placeholderTextColor="#bbb"
          autoCapitalize="none"
          keyboardType="default"
          onChangeText={description => this.setState({ description })}
          returnKeyType="next"
        />
        <TextInput
          style={styles.input}
          placeholder="Informe o tamanho(ml/kg)"
          value={this.state.size}
          autoCorrect={false}
          placeholderTextColor="#bbb"
          autoCapitalize="none"
          keyboardType="numeric"
          onChangeText={size => this.setState({ size })}
          returnKeyType="next"
        />
        <TextInput
          style={styles.input}
          placeholder="Informe o preço"
          value={this.state.price}
          autoCorrect={false}
          placeholderTextColor="#bbb"
          autoCapitalize="none"
          keyboardType="numeric"
          onChangeText={price => this.setState({ price })}
          returnKeyType="next"
        />
        <TextInput
          style={styles.input}
          placeholder="Informe a quantidade disponível"
          value={this.state.available}
          autoCorrect={false}
          placeholderTextColor="#bbb"
          autoCapitalize="none"
          keyboardType="numeric"
          onChangeText={available => this.setState({ available })}
          returnKeyType="next"
        />
        <Picker
          selectedValue={this.state.type}
          style={styles.picker}
          onValueChange={(type, index) => {
            this.setState({ type });
            console.tron.log(this.state.type);
          }}
        >
          {
            this.state.types && this.state.types.map(item => (
              <Picker.Item key={item.id} label={item.name} value={item.name} />
            ))
          }
        </Picker>
        <TouchableOpacity style={styles.button} onPress={() => this.create()}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CreateProduct;
