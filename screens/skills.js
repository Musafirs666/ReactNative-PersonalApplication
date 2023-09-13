import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    FlatList,
    Dimensions,
} from 'react-native'
import { globalStyles } from '../globalStyle'

export default function SkillScreen() {
    const [inputSearch, setInputSearch] = useState('')
    const skillList = [
        {
            title: 'Angular',
            url: require('../assets/img/icon/icon-angular.png'), // Menggunakan require untuk mengimpor gambar
            key: 1,
        },
        {
            title: 'Native',
            url: require('../assets/img/icon/icon-native.png'),
            key: 2,
        },
        {
            title: 'ReactJs',
            url: require('../assets/img/icon/icon-reactjs.png'),
            key: 3,
        },
        {
            title: 'NextJs',
            url: require('../assets/img/icon/icon-nextjs.png'),
            key: 4,
        },
        {
            title: 'Tailwind',
            url: require('../assets/img/icon/icon-tailwindhd.png'),
            key: 5,
        },
    ]
    const width = Dimensions.get('window').width - 40

    const onChangeInputSearch = () => {}
    return (
        <View style={globalStyles.container}>
            <View style={[globalStyles.headerContainer, { gap: 10 }]}>
                <View
                    style={{
                        flex: 2,
                        padding: 2,
                        height: 70,
                        justifyContent: 'center',
                    }}
                >
                    <TextInput
                        style={[styles.input, { paddingLeft: 20 }]}
                        onChangeText={onChangeInputSearch}
                        value={inputSearch}
                        placeholder="search my project"
                    />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        padding: 2,
                        gap: 10,
                        height: 70,
                    }}
                >
                    <View
                        style={{
                            borderRadius: 10,
                            width: 50,
                            height: 50,
                            shadowColor: '#000000',
                            shadowOffset: {
                                width: 0,
                                height: 6,
                            },
                            shadowOpacity: 0.4,
                            shadowRadius: 8.3,
                            elevation: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'white',
                        }}
                    >
                        <Image
                            source={require('../assets/img/icon/icon-search.png')}
                            style={{
                                borderRadius: 10,
                                width: '50%',
                                height: '50%',
                                resizeMode: 'contain',
                            }}
                        ></Image>
                    </View>
                    <View
                        style={{
                            borderRadius: 10,
                            width: 50,
                            height: 50,
                            shadowRadius: 8.3,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={require('../assets/img/icon/icon-sort.png')}
                            style={{
                                borderRadius: 10,
                                width: '60%',
                                height: '60%',
                                resizeMode: 'contain',
                            }}
                        ></Image>
                    </View>
                </View>
            </View>

            <View
                style={{
                    marginTop: 30,
                    flex: 1,
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 5,
                        paddingHorizontal: 20,
                        paddingBottom: 10,
                    }}
                >
                    <Image
                        source={require('../assets/img/icon/icon-portofolio.png')}
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    ></Image>
                    <Text
                        style={[
                            globalStyles.text,
                            { fontFamily: 'Poppins-Bold' },
                        ]}
                    >
                        All My Skills
                    </Text>
                </View>
                <View style={{ width: this.width, paddingBottom: 40 }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={skillList}
                        renderItem={({ item }) => (
                            <View
                                style={{
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    marginStart: 20,
                                }}
                            >
                                <View
                                    style={{
                                        height: 300,
                                        width: width,
                                        borderRadius: 10,
                                        backgroundColor: '#e3d9fc',
                                        paddingHorizontal: 15,
                                        paddingVertical: 15,
                                        
                                    }}
                                >
                                    <Text
                                        style={[
                                            globalStyles.text,
                                            {
                                                fontFamily: 'Poppins-Bold',
                                            },
                                        ]}
                                    >
                                        Abcde SKill
                                    </Text>
                                    <View
                                        style={{
                                            width: '100%',
                                            height: '85%',
                                            borderRadius: 10,
                                            padding: 20,
                                            justifyContent:'space-between'
                                        }}
                                    >
                                        {Array.from({ length: 5 }).map((_,index) => (
                                            <View
                                                key={index}
                                                style={{
                                                    flexDirection: 'row',
                                                    width: '100%',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <View
                                                    style={{
                                                        flex: 1,
                                                        justifyContent:
                                                            'center',
                                                    }}
                                                >
                                                    <Text
                                                        style={[
                                                            globalStyles.text,
                                                            {
                                                                flex: 1,
                                                            },
                                                        ]}
                                                    >
                                                        Efg Tools
                                                    </Text>
                                                </View>

                                                <View
                                                    style={{
                                                        flex: 2,
                                                        flexDirection: 'row',
                                                        gap: 10,
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    {Array.from({
                                                        length: 5,
                                                    }).map((_, index) => (
                                                        <Image
                                                        key={index}
                                                        source={require('../assets/img/icon/icon-star-purple.png')}
                                                            style={{
                                                                width: 20,
                                                                height: 20,
                                                                
                                                            }}
                                                        ></Image>
                                                    ))}
                                                </View>
                                            </View>
                                        ))}
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 2,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.4,
        shadowRadius: 8.3,
        elevation: 10,
    },
    bodyContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
        backgroundColor: 'red',
        flex: 1,
    },
})
