import os

def removeExtensionFile(filePath, fileExtension):
    if os.path.exists(filePath):
        for file in os.scandir(filePath):
            if file.name.endswith(fileExtension):
                os.remove(file.path)
        return 'Remove File:' + fileExtension
    else:
        return 'Directory Not Found'
print(removeExtensionFile('C:/BeautyM/modules/MMM-BeforeAfter/before','.png'))