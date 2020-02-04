import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux"
import { AddCity, DeleteCity } from "./constants"
class CitiesList extends React.Component {

    addCity(city_name) {
        this.props.dispatch({
            type: AddCity,
            city: city_name
        })
    }

    deleteCity(index) {
        this.props.dispatch({
            type: DeleteCity,
            cityIndex: index
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={{ margin: 20, }} onPress={() => this.addCity("London")}>
                    <Text style={{ color: "blue", fontSize: 24 }}>London</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 20, }} onPress={() => this.addCity("Dammam")}>
                    <Text style={{ color: "blue", fontSize: 24 }}>Dammam</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 20, }} onPress={() => this.addCity("Chicago")}>
                    <Text style={{ color: "blue", fontSize: 24 }}>Chicago</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 20, }} onPress={() => this.addCity("Qatif")}>
                    <Text style={{ color: "blue", fontSize: 24 }}>Qatif</Text>
                </TouchableOpacity>
                <FlatList
                    data={this.props.cities}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => this.deleteCity(index)} >
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }
}

const props = store => ({
    cities: store.cities,
})

export default connect(props)(CitiesList)
