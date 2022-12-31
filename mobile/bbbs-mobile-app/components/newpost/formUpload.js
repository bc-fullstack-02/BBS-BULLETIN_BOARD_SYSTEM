import { View,Image,TextInput,Text, Button } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'


const uploadPostSchema = yup.object({
  ImgUrl: yup.string().required().url(),
  caption: yup.string().required().min(1200),
  location: yup.string().required(),
  date: yup.date().required(),

})
const PLACEHOLDER = 'https://www.dummyimage.com/400x400/000/fff&text=Teste'

const formUpload = () => {
  const [ThumbNailURl , setThumbNailURl  ] = React.useState(
    PLACEHOLDER
  )
  return (
   <Formik
      initialValues={{ ImgUrl: '', caption: '', location: '', date: '' }}
      validationSchema={uploadPostSchema}
      onSubmit={(values=> console.log(values))}
     validateOnMount={true}
    >
      {({ 
       handleChange,
       handleBlur, 
       handleSubmit, 
       values ,
       errors,
       isValid
    }) => (
        <>
          <View style={{margin:20,flexDirection:"row", justifyContent:"space-between"}}>
            <Image source={{ uri: ThumbNailURl ? ThumbNailURl :PLACEHOLDER  }} style={{
              width: 100,
              height: 100,
            }} />
           <View style={{flex:1,marginLeft:12,flexDirection:"row"
            ,justifyContent:"space-between",alignItems:"center",
            backgroundColor:"white",borderRadius:10,margin:10,
            padding:10, shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
          }}>
            <TextInput placeholder='write caption' placeholderTextColor='gray'
            
            multiline={true}
            onChangeText={handleChange('caption')}
            onBlur={handleBlur('caption')}
            value={values.caption}
            />    
            </View>
            </View>
            
            <TextInput placeholder='url' placeholderTextColor='red'
            onChange={(e) => setThumbNailURl(e.nativeEvent.text)}
            onChangeText={handleChange('ImgUrl')}
            onBlur={handleBlur('ImgUrl')}
            value={values.ImgUrl}/>
            {errors && errors.ImgUrl && <Text>{errors.ImgUrl}</Text>}
              <TextInput placeholder='location' placeholderTextColor='red'
            onChangeText={handleChange('location')}
            onBlur={handleBlur('location')}
            value={values.location}
            />
            {errors && errors.location && <Text>{errors.location}</Text>}
            <TextInput placeholder='date' placeholderTextColor='red'
            onChangeText={handleChange('date')}
            onBlur={handleBlur('date')}
            value={values.date}
            keyboardType='numeric'
            />
          
           <Button title='submit' onPress={handleSubmit} disabled={isValid} />
        </>
      )}
    </Formik>
  )
}
export default formUpload