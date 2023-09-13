import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    FlatList,
    SafeAreaView,
    Pressable,
} from 'react-native'
import { globalStyles } from '../globalStyle'
import { FIREBASE_AUTH } from '../firebaseConfig'
import axios from 'axios'
import { FIREBASE_STORAGE } from '../firebaseConfig'
import { ref, getDownloadURL } from 'firebase/storage'
import SplashScreen from '../components/splashScreen'

export default function HomeScreen() {
    const [skillList, setSkillList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const apiAddress =
        'https://webprofile-ad5de-default-rtdb.asia-southeast1.firebasedatabase.app/skills/frameworks.json'

    const getSkillList = async () => {
        try {
            const response = await axios.get(apiAddress)
            const data = response.data
            let skill = []
            for (let key in data) {
                const frameWorkImageRef = ref(
                    FIREBASE_STORAGE,
                    `${data[key].url}`
                )
                getDownloadURL(frameWorkImageRef).then((url) => {
                    const updatedSkill = {
                        ...data[key],
                        key: key,
                        imageRef: url,
                    }
                    skill.push(updatedSkill)
                    setSkillList([...skill])
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSkillList()
        setIsLoading(false)
    }, [])

    if (isLoading) {
        return <SplashScreen />
    }

    return (
        <SafeAreaView
            style={[globalStyles.container, { flex: 1, marginTop: 30 }]}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={globalStyles.headerContainer}>
                    <View
                        style={{
                            flex: 2,
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            style={[
                                globalStyles.text,
                                { fontFamily: 'Poppins-Bold', fontSize: 15 },
                            ]}
                        >
                            Hello, I'm Pradana Aldi M.
                        </Text>
                        <Text
                            style={[
                                globalStyles.text,
                                { fontFamily: 'Poppins-Regular' },
                            ]}
                        >
                            Front End Developer
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            gap: 15,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <View
                            style={{
                                borderRadius: 100,
                                width: 60,
                                height: 60,
                                shadowColor: '#000000',
                                shadowOffset: {
                                    width: 0,
                                    height: 6,
                                },
                                shadowOpacity: 0.4,
                                shadowRadius: 8.3,
                                elevation: 10,
                            }}
                        >
                            <Image
                                source={require('../assets/img/home/profile1.png')}
                                style={{
                                    borderRadius: 100,
                                    width: '100%',
                                    height: '100%',
                                    resizeMode: 'contain',
                                }}
                            ></Image>
                        </View>

                        <Pressable
                            onPress={() => FIREBASE_AUTH.signOut()}
                            style={{
                                borderRadius: 100,
                                width: 30,
                                height: 30,
                                shadowColor: '#000000',
                                shadowOffset: {
                                    width: 0,
                                    height: 6,
                                },
                                shadowOpacity: 0.4,
                                shadowRadius: 8.3,
                            }}
                        >
                            <Image
                                source={require('../assets/img/icon/icon-logout.png')}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    resizeMode: 'contain',
                                }}
                            ></Image>
                        </Pressable>
                    </View>
                </View>
                <View
                    style={{
                        marginTop: 20,
                        paddingHorizontal: 20,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 5,
                        }}
                    >
                        <Image
                            source={require('../assets/img/icon/icon-rating.png')}
                            style={{
                                width: 30,
                                height: 30,
                                resizeMode: 'cover',
                            }}
                        ></Image>
                        <Text
                            style={[
                                globalStyles.text,
                                { fontFamily: 'Poppins-Bold' },
                            ]}
                        >
                            Skills Rating
                        </Text>
                    </View>
                    <View style={{ paddingTop: 10, paddingBottom: 30 }}>
                        <View
                            style={{
                                height: 250,
                                backgroundColor: 'white',
                                borderRadius: 25,
                                marginTop: 5,
                                shadowColor: '#000',
                                shadowOffset: {
                                    width: 0,
                                    height: 6,
                                },
                                shadowOpacity: 0.39,
                                shadowRadius: 8.3,

                                elevation: 13,
                            }}
                        >
                            <View
                                style={{
                                    height: 200,
                                    justifyContent: 'space-around',
                                    alignItems: 'flex-end',
                                    flexDirection: 'row',
                                    borderRadius: 25,
                                    marginTop: 5,
                                }}
                            >
                                <View
                                    style={{
                                        width: 20,
                                        height: '90%',
                                        backgroundColor: '#4289e5',
                                        borderTopLeftRadius: 100,
                                        borderTopRightRadius: 100,
                                    }}
                                ></View>
                                <View
                                    style={{
                                        width: 20,
                                        height: '90%',
                                        backgroundColor: '#4289e5',
                                        borderTopLeftRadius: 100,
                                        borderTopRightRadius: 100,
                                    }}
                                ></View>
                                <View
                                    style={{
                                        width: 20,
                                        height: '90%',
                                        backgroundColor: '#4289e5',
                                        borderTopLeftRadius: 100,
                                        borderTopRightRadius: 100,
                                    }}
                                ></View>
                                <View
                                    style={{
                                        width: 20,
                                        height: '90%',
                                        backgroundColor: '#4289e5',
                                        borderTopLeftRadius: 100,
                                        borderTopRightRadius: 100,
                                    }}
                                ></View>
                                <View
                                    style={{
                                        width: 20,
                                        height: '90%',
                                        backgroundColor: '#4289e5',
                                        borderTopLeftRadius: 100,
                                        borderTopRightRadius: 100,
                                    }}
                                ></View>
                            </View>
                            <View
                                style={{
                                    justifyContent: 'space-around',
                                    alignItems: 'flex-end',
                                    flexDirection: 'row',
                                    borderRadius: 25,
                                    marginTop: 5,
                                }}
                            >
                                <Text>ABC</Text>
                                <Text>ABC</Text>
                                <Text>ABC</Text>
                                <Text>ABC</Text>
                                <Text>ABC</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingRight: 20,
                            paddingLeft: 20,
                            paddingVertical: 10,
                            gap: 5,
                        }}
                    >
                        <Image
                            source={require('../assets/img/icon/icon-framework.png')}
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
                            Recently Learn
                        </Text>
                        <Text
                            style={[
                                globalStyles.text,
                                {
                                    fontFamily: 'Poppins-Bold',
                                    marginLeft: 'auto',
                                    color: '#4289e5',
                                },
                            ]}
                        >
                            See more
                        </Text>
                    </View>
                    <View
                        style={{
                            alignItems: 'flex-end',
                            flexDirection: 'row',
                        }}
                    >
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={skillList}
                            renderItem={({ item }) => (
                                <View
                                    style={{
                                        paddingTop: 10,
                                        paddingBottom: 30,
                                    }}
                                >
                                    <View
                                        style={[
                                            styles.skillCard,
                                            {
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                height: 80,
                                                width: 80,
                                                backgroundColor: 'white',
                                                marginStart: 20,
                                                marginRight: 10,
                                            },
                                        ]}
                                    >
                                        <Image
                                            source={{ uri: item.imageRef }}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                resizeMode: 'contain',
                                            }}
                                        />
                                    </View>
                                    <View style={{}}>
                                        <Text
                                            style={[
                                                globalStyles.text,
                                                {
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: 80,
                                                    marginStart: 20,
                                                    paddingLeft: 15,
                                                    marginTop: 5,
                                                },
                                            ]}
                                        >
                                            {item.title}
                                        </Text>
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                </View>

                <View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 5,
                            paddingHorizontal: 20,
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
                            Recently Project
                        </Text>
                        <Text
                            style={[
                                globalStyles.text,
                                {
                                    fontFamily: 'Poppins-Bold',
                                    marginLeft: 'auto',
                                    color: '#4289e5',
                                },
                            ]}
                        >
                            See more
                        </Text>
                    </View>
                    <View
                        style={{
                            alignItems: 'flex-end',
                            flexDirection: 'row',
                        }}
                    >
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={skillList}
                            renderItem={({ item }) => (
                                <View
                                    style={{
                                        paddingTop: 10,
                                        paddingBottom: 30,
                                    }}
                                >
                                    <View
                                        style={{
                                            height: 280,
                                            width: 200,
                                            borderRadius: 10,
                                            backgroundColor: 'white',
                                            marginStart: 20,
                                            paddingHorizontal: 15,
                                            paddingVertical: 15,
                                            shadowColor: '#000000',
                                            shadowOffset: {
                                                width: 0,
                                                height: 6,
                                            },
                                            shadowOpacity: 0.4,
                                            shadowRadius: 8.3,
                                            elevation: 10,
                                        }}
                                    >
                                        <Image
                                            source={require('../assets/img/dummy.png')}
                                            style={{
                                                width: '100%',
                                                height: '70%',
                                                resizeMode: 'contain',
                                                borderRadius: 10,
                                            }}
                                        ></Image>
                                        <Text
                                            style={[
                                                globalStyles.text,
                                                {
                                                    fontFamily: 'Poppins-Bold',
                                                    marginTop: 10,
                                                },
                                            ]}
                                        >
                                            My Project
                                        </Text>
                                        <Text style={globalStyles.text}>
                                            Project Description 2 line
                                        </Text>
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                </View>
                <View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 5,
                            paddingHorizontal: 20,
                        }}
                    >
                        <Image
                            source={require('../assets/img/icon/icon-exp.png')}
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
                            Recently Experience
                        </Text>
                        <Text
                            style={[
                                globalStyles.text,
                                {
                                    fontFamily: 'Poppins-Bold',
                                    marginLeft: 'auto',
                                    color: '#4289e5',
                                },
                            ]}
                        >
                            See more
                        </Text>
                    </View>
                    <View
                        style={{
                            alignItems: 'flex-end',
                            flexDirection: 'row',
                        }}
                    >
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={skillList}
                            renderItem={({ item }) => (
                                <View
                                    style={{
                                        paddingTop: 10,
                                        paddingBottom: 30,
                                    }}
                                >
                                    <View
                                        style={{
                                            height: 280,
                                            width: 200,
                                            borderRadius: 10,
                                            backgroundColor: 'white',
                                            marginStart: 20,
                                            paddingHorizontal: 15,
                                            paddingVertical: 15,
                                            shadowColor: '#000000',
                                            shadowOffset: {
                                                width: 0,
                                                height: 6,
                                            },
                                            shadowOpacity: 0.4,
                                            shadowRadius: 8.3,
                                            elevation: 10,
                                        }}
                                    >
                                        <Image
                                            source={require('../assets/img/dummy.png')}
                                            style={{
                                                // backgroundColor: 'red',
                                                width: '100%',
                                                height: '70%',
                                                borderRadius: 10,
                                            }}
                                        ></Image>
                                        <Text
                                            style={[
                                                globalStyles.text,
                                                {
                                                    fontFamily: 'Poppins-Bold',
                                                    marginTop: 10,
                                                },
                                            ]}
                                        >
                                            My Experience
                                        </Text>
                                        <Text style={globalStyles.text}>
                                            ExperienceScreen Description 2 line
                                        </Text>
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                </View>
                <StatusBar style="dark" />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    biographyContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 30,
    },
    skillContainer: {
        marginTop: 20,
        flex: 1,
    },
    skillCard: {
        borderRadius: 100,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    projectContainer: {
        flex: 1,
        marginTop: 15,
    },
})
