import React from 'react';
import Tesseract from 'tesseract.js';
import './scandeed.css';

const App = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [image, setImage] = React.useState('');
    const [text, setText] = React.useState('');
    const [progress, setProgress] = React.useState(0);
  
    const handleSubmitE = () => {
      setIsLoading(true);
      Tesseract.recognize(image, 'eng',{
          logger: (m) => {
            console.log(m);
            if (m.status === 'recognizing text') {
              setProgress(parseInt(m.progress * 100));
            }
          },
        })
        .catch((err) => {
          console.error(err);
        })
        .then((result) => {
          console.log(result.data);
          setText(result.data.text);
          setIsLoading(false);
        });
  };
  
  const handleSubmitS = () => {
    setIsLoading(true);
    Tesseract.recognize(image, 'sin',{
        logger: (m) => {
          console.log(m);
          if (m.status === 'recognizing text') {
            setProgress(parseInt(m.progress * 100));
          }
        },
      })
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        console.log(result.data);
        setText(result.data.text);
        setIsLoading(false);
      });
  };

  const handleSubmitT = () => {
    setIsLoading(true);
    Tesseract.recognize(image, 'tam',{
        logger: (m) => {
          console.log(m);
          if (m.status === 'recognizing text') {
            setProgress(parseInt(m.progress * 100));
          }
        },
      })
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        console.log(result.data);
        setText(result.data.text);
        setIsLoading(false);
      });
  };
  
    return (
      <div className="container">
        <div className="row h-100">
          <div className="col-md-5 mx-auto h-100 d-flex flex-column justify-content-center">
            {!isLoading && (
              <div>
              <h2 className="text-center">Convert Deed To Text</h2>
              <p className="text-center"> Convert your legal deed into digital text </p>
              </div>
            )}
            {isLoading && (
              <>
                <progress className="form-control" value={progress} max="100">
                  {progress}%{' '}
                </progress>{' '}
                <p className="text-center py-0 my-0">Converting:- {progress} %</p>
              </>
            )}
            {!isLoading && !text && (
              <>
                <input
                  type="file"
                  onChange={(e) =>
                    setImage(URL.createObjectURL(e.target.files[0]))
                  }
                  className="form-control mt-5 mb-2"
                />
                <input
                  type="button"
                  onClick={handleSubmitE}
                  className="btn btn-primary mt-5"
                  value="Convert to English Text"
                />
                <input
                  type="button"
                  onClick={handleSubmitS}
                  className="btn btn-primary mt-5"
                  value="Convert to Sinhala Text"
                />
                <input
                  type="button"
                  onClick={handleSubmitT}
                  className="btn btn-primary mt-5"
                  value="Convert to Tamil Text"
                />
              </>
            )}
            {!isLoading && text && (
              <>
                <textarea
                  className="form-control w-100 mt-5"
                  rows="30"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default App;