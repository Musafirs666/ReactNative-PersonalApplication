import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    Dimensions,
    ScrollView,
    SafeAreaView
} from 'react-native'
import { globalStyles } from '../globalStyle'

export default function AboutMeScreen() {
    const skillList = [
        {
            title: 'Instagram',
            url: require('../assets/img/icon/icon-instagram.png'), // Menggunakan require untuk mengimpor gambar
            key: 1,
        },
        {
            title: 'Discord',
            url: require('../assets/img/icon/icon-discord.png'),
            key: 2,
        },
        {
            title: 'Gmail',
            url: require('../assets/img/icon/icon-gmail.png'),
            key: 3,
        },
        {
            title: 'Github',
            url: require('../assets/img/icon/icon-github.png'),
            key: 4,
        },
    ]
    const width = Dimensions.get('window').width - 60
    return (
        <SafeAreaView style={[globalStyles.container,{flex: 1,marginTop: 30,}]}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
            <View style={[globalStyles.headerContainer, { gap: 25 }]}>
                <View style={{}}>
                    <Image
                        source={require('../assets/img/home/profile1.png')}
                        style={{
                            width: 90,
                            height: 90,
                            backgroundColor: 'green',
                            borderRadius: 100,
                            resizeMode: 'contain',
                        }}
                    ></Image>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Text
                        style={[
                            globalStyles.text,
                            { fontFamily: 'Poppins-Bold', fontSize: 16 },
                        ]}
                    >
                        Pradana Aldi Musthofa
                    </Text>
                    <Text style={globalStyles.text}>Front End Developer</Text>
                    <Text style={globalStyles.text}>21 Years old</Text>
                </View>
            </View>

            <View
                style={{
                    paddingHorizontal: 20,
                    // backgroundColor: 'red',
                    marginTop: 60,
                }}
            >
                <View
                    style={{
                        justifyContent: 'center',
                        backgroundColor: '#dceffa',
                        borderRadius: 10,
                        padding: 20,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 15,
                        }}
                    >
                        <Image
                            source={require('../assets/img/icon/icon-electric.png')}
                            style={{
                                width: 50,
                                height: 50,
                                resizeMode: 'contain',
                                // backgroundColor:'red'
                            }}
                        ></Image>
                        <Text
                            style={[
                                globalStyles.text,
                                {
                                    fontFamily: 'Poppins-Bold',
                                    fontSize: 16,
                                    color: '#4289e5',
                                },
                            ]}
                        >
                            Beginner Dev.
                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 15,
                        }}
                    >
                        <View
                            style={{
                                width: 50,
                                height: 0,
                            }}
                        ></View>
                        <Text
                            style={[
                                globalStyles.text,
                                { fontFamily: 'Poppins-Medium', fontSize: 14 },
                            ]}
                        >
                            Learned 3 Frameworks in 3 Months
                        </Text>
                    </View>
                </View>
            </View>

            <View
                style={{
                    paddingHorizontal: 20,
                    
                    // backgroundColor: 'red',
                    marginTop: 30,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <View
                    style={{
                        width: width / 3,
                        height: 120,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#d4fcda',
                        borderRadius: 10,
                        padding: 10,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'flex-end',
                            gap: 5,
                            // backgroundColor:'grey',
                        }}
                    >
                        <Image
                            source={require('../assets/img/icon/icon-task.png')}
                            style={{
                                width: '25%',
                                resizeMode: 'contain',
                            }}
                        ></Image>
                        <Text
                            style={[
                                globalStyles.text,
                                { fontSize: 32, color: '#0da515' },
                            ]}
                        >
                            02
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={[
                                globalStyles.text,
                                { fontSize: 16, fontFamily: 'Poppins-Medium' },
                            ]}
                        >
                            Portfolio
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        width: width / 3,
                        height: 120,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#faeed2',
                        borderRadius: 10,
                        padding: 10,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'flex-end',
                            gap: 5,
                            // backgroundColor:'grey',
                        }}
                    >
                        <Image
                            source={require('../assets/img/icon/icon-frameworksAbout.png')}
                            style={{
                                width: '25%',
                                resizeMode: 'contain',
                            }}
                        ></Image>
                        <Text
                            style={[
                                globalStyles.text,
                                { fontSize: 32, color: '#d98821' },
                            ]}
                        >
                            05
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={[
                                globalStyles.text,
                                { fontSize: 16, fontFamily: 'Poppins-Medium' },
                            ]}
                        >
                            Framework
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        width: width / 3,
                        height: 120,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#e3d9fc',
                        borderRadius: 10,
                        padding: 10,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'flex-end',
                            gap: 5,
                            // backgroundColor:'grey',
                        }}
                    >
                        <Image
                            source={require('../assets/img/icon/icon-expAbout.png')}
                            style={{
                                width: '25%',
                                resizeMode: 'contain',
                            }}
                        ></Image>
                        <Text
                            style={[
                                globalStyles.text,
                                { fontSize: 32, color: '#9267ff' },
                            ]}
                        >
                            0
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={[
                                globalStyles.text,
                                { fontSize: 16, fontFamily: 'Poppins-Medium' },
                            ]}
                        >
                            Experience
                        </Text>
                    </View>
                </View>
            </View>

            <View
                style={{
                    paddingHorizontal: 20,
                    // backgroundColor: 'red',
                    marginTop: 30,
                }}
            >
                <View
                    style={{
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        borderRadius: 10,
                        padding: 20,
                    }}
                >
                    <Text
                        style={[
                            globalStyles.text,
                            { fontFamily: 'Poppins-Bold', fontSize: 16 },
                        ]}
                    >
                        Bio
                    </Text>
                    <Text style={[globalStyles.text, {}]}>
                        Seorang mahasiswa yang sedang mendalami bidang
                        front-end, memiliki kemampuan membangun UI sebuah
                        website yang responsif dan menarik menggunakan
                        javascript & typescript languange khususnya ReactJs dan
                        NextJs. Senang bekerja dalam tim dan siap untuk belajar
                        dan berkembang bersama untuk industri perusahaan.
                    </Text>
                </View>
            </View>
            <View
                style={{
                    marginTop: 10,
                    // backgroundColor: 'red',
                    padding: 20,
                }}
            >
                <View
                    style={{
                        backgroundColor: 'white',
                        borderRadius: 10,
                        paddingTop: 20,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 5,
                            paddingHorizontal: 20,
                        }}
                    >
                        <Text
                            style={[
                                globalStyles.text,
                                { fontFamily: 'Poppins-Bold' },
                            ]}
                        >
                            Contacts
                        </Text>
                    </View>
                    <View style={{ width: this.width, paddingBottom: 20 }}>
                        <FlatList
                            columnWrapperStyle={{
                                justifyContent: 'space-between',
                                marginStart: 20,
                                marginEnd: 20,
                            }}
                            scrollEnabled={false}
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            data={skillList}
                            renderItem={({ item }) => (
                                <View
                                    style={{
                                        paddingTop: 10,
                                        paddingBottom: 10,
                                    }}
                                >
                                    <View
                                        style={{
                                            height: 50,
                                            width: width/2.3,
                                            borderRadius: 10,
                                            backgroundColor: 'white',
                                            paddingHorizontal: 15,
                                            paddingVertical: 15,
                                            shadowColor: '#000000',
                                            shadowOffset: {
                                                width: 0,
                                                height: 6,
                                            },
                                            shadowOpacity: 0.4,
                                            shadowRadius: 8.3,
                                            elevation: 6,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            gap: 5,
                                        }}
                                    >
                                        <Image
                                            source={item.url}
                                            style={{
                                                width: '20%',
                                                height: '100%',
                                                borderRadius: 5,
                                                justifyContent: 'flex-start',
                                                resizeMode: 'contain',
                                            }}
                                        ></Image>
                                        <Text style={globalStyles.text}>
                                            {item.title}
                                        </Text>
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
