// the main script to run most of your commands so the threads (actually processes for now)
const deepfry = require('./jimp/Deepfry_worker.js');
const fry = require('./jimp/Fry_worker.js');
const overfry = require('./jimp/Overfry_worker.js');
const rdog = require('./jimp/Rdog_worker.js');
const hatkidsays = require('./jimp/HatKidSays_worker.js');
const halloweenify = require('./jimp/Halloweenify_worker.js');
const blurpify = require('./jimp/Blurpify_worker.js');
const sonicsays = require('./jimp/SonicSays_worker.js');
const jpegify = require('./jimp/Jpegify_worker.js');
const homie = require('./jimp/Homie_worker.js');
const bazinga = require('./jimp/Bazinga_worker.js');
const ascii = require('./jimp/Ascii_worker.js');
const imgtobase64 = require('./jimp/IMGToBase64_worker.js');
const giftobase64 = require('./jimp/GifToBase64_worker.js');
const qrcodetext = require('./jimp/qrCode_worker.js');
const pixelate = require('./jimp/Pixelate_worker.js');
const loadBuffer = require('./canvas/LoadBuffer_worker.js');
const saveImage = require('./jimp/SaveImage_worker.js');

// canvas
const cmm = require('../workers/canvas/ChangeMyMind_worker.js');
const achievement = require('../workers/canvas/Achievement_worker.js');
const noteText = require('../workers/canvas/NoteText_worker.js');
const pengu = require('../workers/canvas/Pengu_worker.js');
const trumpLaw = require('../workers/canvas/TrumpLaw_worker.js');
const tweetPerson = require('../workers/canvas/TweetPerson_worker.js');
const whyFBIHere = require('../workers/canvas/WhyFBIHere_worker.js');

const canvasHelper = require('../workers/WorkerHelpers/CanvasHelper.js');

// sharp
const sharpen = require('../workers/sharp/Sharpen.js');
const blur = require('../workers/sharp/Blur.js');

// check that the sorter was called as a worker thread
process.on('message', async (message) => {

    let buffer;
    try {
        const endpoint = message.endpoint;
        const body = message.body;

        switch(endpoint) {

            case 'bodypillow':
                buffer = await canvasHelper.execute(message.buffers, body.image_url, { resizeX: 105, resizeY: 115, compositeX1: 220, compositeY1: 130 });
            break;

            case 'bodypillowmale':
                buffer = await canvasHelper.execute(message.buffers, body.image_url, { resizeX: 75, resizeY: 75, compositeX1: 95, compositeY1: 79 });
            break;

            case 'deepfry':
                buffer = await deepfry.execute(body.image_url);
            break;

            case 'fry':
                buffer = await fry.execute(body.image_url);
            break;

            case 'overfry':
                buffer = await overfry.execute(body.image_url);
            break;

            case 'jojokira':
                buffer = await canvasHelper.execute(message.buffers, body.image_url, { resizeX: 315, resizeY: 430, compositeX1: 800, compositeY1: 10, rotate: .30 });
            break;

            case 'jojoshock':
                buffer = await canvasHelper.execute(message.buffers, body.image_url, { resizeX: 88, resizeY: 82, compositeX1: 302, compositeY1: 150 });
            break;

            case 'jojosmash':
                buffer = await canvasHelper.execute(message.buffers, body.image_url, { resizeX: 355, resizeY: 255, compositeX1: 0, compositeY1: 230 });
            break;

            case 'jojosmile':
                buffer = await canvasHelper.execute(message.buffers, body.image_url, { resizeX: 220, resizeY: 210, compositeX1: 173, compositeY1: 20, rotate: -0.3 });
            break;

            case 'jojowallet':
                buffer = await canvasHelper.execute(message.buffers, body.image_url, { resizeX: 445, resizeY: 270, compositeX1: 285, compositeY1: 125, rotate: -0.6 });
            break;

            case 'phonememe':
                buffer = await canvasHelper.execute(message.buffers, body.image_url, { resizeX: 350, resizeY: 600, compositeX1: 650, compositeY1: 580, rotate: 0.2  } );
            break;

            case 'rdog':
                buffer = await rdog.execute(body.text, message.buffers);
            break;

            case 'trumphold':
                buffer = await canvasHelper.execute(message.buffers, body.image_url, { resizeX: 250, resizeY: 370, compositeX1: 340, compositeY1: 190, rotate: 0.2  } );
            break;

            case 'top10animebattles':
            case 'top10animesad':
            case 'top10animebrutal':
            case 'top10animebetrayal':
                buffer = await canvasHelper.execute(message.buffers, body.image_url, { resizeX: 625, resizeY: 391, compositeX1: 0, compositeY1: 0 });
            break;

            case 'policeposter':
                buffer = await canvasHelper.execute(message.buffers, body.image_url, { resizeX: 195, resizeY: 255, compositeX1: 190, compositeY1: 345, rotate: -0.17 });
            break;

            case 'payrespects':
                buffer = await canvasHelper.execute(message.buffers, body.image_url, { resizeX: 98, resizeY: 125, compositeX1: 70, compositeY1: -12, rotate: -.09 });
            break;

            case 'mariojumping':
                buffer = await canvasHelper.execute(message.buffers, body.image_url, { resizeX: 270, resizeY: 200, compositeX1: 375, compositeY1: 0 });
            break;

            case 'sunnyframe':
            case 'sunnyframequote':
                buffer = await canvasHelper.execute(message.buffers, body.image_url, { resizeX: 275, resizeY: 475, compositeX1: 155, compositeY1: 25, rotate: -0.03 });
            break;

            case 'loveher':
                buffer = await canvasHelper.execute(message.buffers, body.image_url, { resizeX: 640, resizeY: 610, compositeX1: 0, compositeY1: 562 });
            break;

            case 'dio':
                buffer = await canvasHelper.execute(message.buffers, message.buffers, { resizeX: 934, resizeY: 720, compositeX1: 0, compositeY1: 0 });
            break;

            case 'dateline':
                buffer = await canvasHelper.execute(message.buffers, body.image_url, { resizeX: 480, resizeY: 480, compositeX1: 0, compositeY1: 0 });
            break;

            case 'nope':
                buffer = await canvasHelper.execute(message.buffers, body.image_url, { resizeX: 350, resizeY: 460, compositeX1: 310, compositeY1: 12 });
            break;

            case 'hot':
                buffer = await canvasHelper.execute(message.buffers, message.buffers,
                    {
                        resizeX: undefined, // undefined means use the image default
                        resizeY: 320,
                        compositeX1: 0,
                        compositeY1: 355
                    });
            break;

            case 'ihadto':
                buffer = await canvasHelper.execute(message.buffers, message.buffers,  { resizeX: 480, resizeY: 480, compositeX1: 0, compositeY1: 0 });
            break;

            case 'vsauce':
                buffer = await canvasHelper.execute(message.buffers, body.image_url, { resizeX: 753, resizeY: 528, compositeX1: 0, compositeY1: 0 });
            break;

            case 'hatkidsays':
            case 'hatkidsayssmug':
                buffer = await hatkidsays.execute(body.text, message.buffers);
            break;

            case 'halloweenify':
                buffer = await halloweenify.execute(body.image_url, parseInt(body.threshold || 1));
            break;

            case 'blurpify':
                buffer = await blurpify.execute(body.image_url);
            break;

            case 'sonicsays':
                buffer = await sonicsays.execute(body.text, message.buffers);
            break;

            case 'jpegify':
                buffer = await jpegify.execute(body.image_url);
            break;

            case 'homie':
                buffer = await homie.execute(body.image_url, message.buffers);
            break;

            case 'bazinga':
                buffer = await bazinga.execute(body.image_url, message.buffers);
            break;

            case 'blur':
                buffer = await loadBuffer.execute(body.image_url);
                buffer = await blur.execute(buffer, parseInt(body.number) || 10);
            break;

            case 'sharpen':
                buffer = await loadBuffer.execute(body.image_url);
                buffer = await sharpen.execute(buffer, parseInt(body.number) || 10);
            break;

            case 'ascii':
                buffer = await ascii.execute(body.image_url);
            break;

            case 'imgtobase64':
                buffer = await imgtobase64.execute(body.image_url);
            break;

            case 'giftobase64':
                buffer = await giftobase64.execute(body.image_url);
            break;

            case 'qrcode':
                buffer = await qrcodetext.execute(body.image_url);
            break;

            case 'pixelate':
                buffer = await pixelate.execute(body.image_url);
            break;

            case 'saveimage':
                buffer = await saveImage.execute(body.image_url, body.file_name);
            break;

            case 'wtfpoe':
                buffer = await canvasHelper.execute(message.buffers, body.image_url, { resizeX: 480, resizeY: 340, compositeX1: 0, compositeY1: 0 } );
            break;

            case 'bongocattop':
            case 'bongocatmiddle':
                buffer = await canvasHelper.execute(message.buffers, body.image_url, { resizeX: 680, resizeY: 689, compositeX1: 0, compositeY1: 0 });
            break;

            case 'pregnant':
                buffer = await canvasHelper.execute(message.buffers, body.image_url, { resizeX: 636, resizeY: 474, compositeX1: 0, compositeY1: 0 });
            break;

            case 'bobross':
                buffer = await canvasHelper.execute(message.buffers, body.image_url, { resizeX: 455, resizeY: 400, compositeX1: 5, compositeY1: 36, rotate: 0.05 });
            break;

            case 'bobrosszoom':
                buffer = await canvasHelper.execute(message.buffers, body.image_url, { resizeX: 247, resizeY: 228, compositeX1: 0, compositeY1: 0 });
            break;

            case 'changemymind':
                buffer = await cmm.execute(message.buffers, body.text);
            break;

            case 'achievement':
                buffer = await achievement.execute(message.buffers, body.text);
            break;

            case 'noteimage':
                buffer = await canvasHelper.execute(message.buffers, body.image_url, { resizeX: 200, resizeY: 170, compositeX1: 425, compositeY1: 390, rotate: 0.4 });
            break;

            case 'notetext':
                buffer = await noteText.execute(message.buffers, body.text);
            break;

            case 'pengu':
                buffer = await pengu.execute(message.buffers, body.text);
            break;

            case 'trumplaw':
                buffer = await trumpLaw.execute(message.buffers, body.text);
            break;

            case 'elontweet':
            case 'trumptweet':
                buffer = await tweetPerson.execute(message.buffers, body.text);
            break;

            case 'whyfbihere':
                buffer = await whyFBIHere.execute(message.buffers, body.text);

        }

    } catch (error) {
        console.error(error);
    }

    // send back message buffer and request number
    process.send({buffer: buffer, requestNum: message.requestNum} );
});