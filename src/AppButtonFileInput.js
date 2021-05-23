import React, { useEffect, useState } from "react";

export default function AppButtonFileInput(props) {
  const [fileContent, setFileContent] = useState(null);

  useEffect(() => {
    console.log('file content',  fileContent);
  })

  const handleFile = (e) => {
    const contentRows = e.target.result.split('\n');
    setFileContent(contentRows);
  }
  
  const handleChangeFile = (file) => {
    let fileData = new FileReader();
    fileData.onloadend = handleFile;
    fileData.readAsText(file);
  }

  return(
    <div>
      <label className="app-button-file-input">
      ファイルを選択<input type="file" onChange={e => 
            handleChangeFile(e.target.files[0])} />
      </label>
      <p>
        {fileContent}
      </p>
    </div>
  );

};
