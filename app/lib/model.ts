import { GLTFLoader } from 'three-stdlib'
import * as THREE from 'three'

export interface Work {
  title: string
  year: string
  desc: string
  itemList: string[]
  badges: string[]
}

// glt file loader
export function loadGLTModel(
  scene: THREE.Scene,
  glbPath: string,
  options = { recieveShadow: true, castShadow: true }
) {
  const { recieveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()

    loader.load(
      glbPath, // url
      gltf => {
        const obj = gltf.scene
        obj.name = 'mascot'
        obj.position.y = 2
        obj.position.x = 0
        obj.receiveShadow = recieveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(child => {
          if ((child as THREE.Mesh).isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = recieveShadow
          }
        })
        resolve(obj)
      },
      undefined, // onProgress
      function (error) {
        // onError
        reject(error)
      }
    )
  })
}
