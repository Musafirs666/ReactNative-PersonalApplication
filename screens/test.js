import { React, useState, useEffect } from 'react'
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    FlatList,
    Image,
} from 'react-native'
import { globalStyles } from '../globalStyle'
import axios from 'axios'
import { FIREBASE_STORAGE } from '../firebaseConfig'
import { ref, getDownloadURL } from 'firebase/storage'

const Test = () => {
    const [skillList, setSkillList] = useState([])
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
                    console.log(updatedSkill) 
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSkillList()
    }, [])

    return (
        <SafeAreaView
            style={[globalStyles.container, { flex: 1, marginTop: 60 }]}
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
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})

export default Test
