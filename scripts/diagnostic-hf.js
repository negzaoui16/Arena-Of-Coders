const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

const hfToken = process.env.HUGGINGFACE_TOKEN || '';
const imageSpaceUrl = 'https://negzaoui-antiimagesenvirement.hf.space/scan';
const audioSpaceUrl = 'https://negzaoui-modelevocal.hf.space/scan-audio';

const imagePath = 'C:/Users/Negza/Desktop/Negzaoui/test/Image/656987494_2170530053703337_6325963758592724824_n.jpg';
const audioPath = 'C:/Users/Negza/Desktop/Negzaoui/test/vocal/Enregistrement (5).m4a';

async function testImage() {
    console.log('\n--- TEST MODÈLE IMAGE ---');
    try {
        const form = new FormData();
        form.append('image', fs.createReadStream(imagePath));
        
        const response = await axios.post(imageSpaceUrl, form, {
            headers: {
                ...form.getHeaders(),
                'Authorization': `Bearer ${hfToken}`
            },
            timeout: 90000
        });
        console.log('Réponse Image:', JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.error('Erreur Image:', error.response ? error.response.data : error.message);
    }
}

async function testAudio() {
    console.log('\n--- TEST MODÈLE AUDIO ---');
    try {
        const form = new FormData();
        form.append('audio', fs.createReadStream(audioPath));
        
        const response = await axios.post(audioSpaceUrl, form, {
            headers: {
                ...form.getHeaders(),
                'Authorization': `Bearer ${hfToken}`
            },
            timeout: 90000
        });
        console.log('Réponse Audio:', JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.error('Erreur Audio:', error.response ? error.response.data : error.message);
    }
}

async function runTests() {
    await testImage();
    await testAudio();
}

runTests();
