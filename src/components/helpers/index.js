import image1 from '../../assets/images/1.png'
import image2 from '../../assets/images/2.png'
import image3 from '../../assets/images/3.png'
import image4 from '../../assets/images/4.png'

export function shipConstructor() {
    const shipSize = Math.ceil(Math.random() * 4);
    switch (shipSize) {
        case 1:
            return {
                style: {
                    background: 'url('+image1+') no-repeat center',
                    backgroundSize: 'contain',
                    height: '120px', 
                    width: '400px'
                },
                maxBlocks: 1,
                minBlocksToSail: 1
            };
        case 2:
            return {
                style: {
                    background: 'url('+image2+') no-repeat center',
                    backgroundSize: 'contain',
                    height: '120px', 
                    width: '400px'
                },
                maxBlocks: 2,
                minBlocksToSail: 1
            };
        case 3:
            return {
                style: {
                    background: 'url('+image3+') no-repeat center',
                    backgroundSize: 'contain',
                    height: '120px', 
                    width: '400px'
                },
                maxBlocks: 3,
                minBlocksToSail: 2
            };
        case 4:
            return {
                style: {
                    background: 'url('+image4+') no-repeat center',
                    backgroundSize: 'contain',
                    height: '120px', 
                    width: '400px'
                },
                maxBlocks: 4,
                minBlocksToSail: 3
            };
    }
}
