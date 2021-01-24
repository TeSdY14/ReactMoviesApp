import React from 'react';
import { View, Button, TextInput, StyleSheet, FlatList } from "react-native";
import films from '../Helpers/filmsData';
import FilmItem from './FilmItem';
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.searchedText = ""
        this.state = {
            films: []
        }
    }

    _loadFilms() {
        if (this.searchedText.length > 0) {
            getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
                this.setState({films: data.results})
            })
        }
    }

    _searchedTextInputChanged(text) {
        this.searchedText = text;
    }
    render() {
        return (
            /* View ici est un component custom comprenant des components native (textInput et Button) */
            <View style={ styles.main_container } /* ici le Style fonctionne */ >
                <TextInput style={styles.textInput} 
                           placeholder='Titre du film'
                           onChangeText={(text) => this._searchedTextInputChanged(text)}
                />
                <Button title="Rechercher"
                        onPress={() => this._loadFilms() } /* onPress={() => { ... } } équivaut à  onPress={ function() { ... } } */
                        color="blue"
                />
                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item}/>} /* renderItem={({item}) => <Text>{item.title}</Text>} est équivalent à renderItem={function ({item}) { return <Text>{item.title}</Text> }} */
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
    },
    textInput: {
        margin: 5,
        height: 50,
        borderColor: '#00BFFF',
        borderWidth: 1,
        paddingLeft: 5
    }
})

export default Search;
