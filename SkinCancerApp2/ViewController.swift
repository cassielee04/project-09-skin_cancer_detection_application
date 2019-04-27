//
//  ViewController.swift
//  SkinCancerApp2
//
//  Created by LeeSeung Hee on 3/20/19.
//  Copyright © 2019 LeeSeung Hee. All
//rights reserved.
//

import UIKit

class ViewController: UIViewController, UINavigationControllerDelegate, UIImagePickerControllerDelegate{
    
    
    
    var imagePicker: UIImagePickerController!
    
    enum ImageSource {
        case photoLibrary
        case camera
    }
    
    @IBOutlet weak var imageTake: UIImageView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
 
    @IBAction func save(_ sender: Any) {
        
    }
    
    @IBAction func takePhoto(_ sender: Any) {
        imagePicker =  UIImagePickerController()
        imagePicker.delegate = self
        imagePicker.sourceType = .camera
        present(imagePicker, animated: true, completion: nil)
        }
    
    
   
    
    //MARK: - Take image
    
    
}

