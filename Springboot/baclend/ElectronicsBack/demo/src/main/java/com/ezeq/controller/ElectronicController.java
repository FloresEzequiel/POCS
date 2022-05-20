package com.ezeq.controller;

import com.ezeq.models.Electronic;
import com.ezeq.models.JsonResponse;
import com.ezeq.service.ElectronicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController("electronicController")
@RequestMapping(value="api")
public class ElectronicController {

    private ElectronicService electronicService;
    @Autowired
    public ElectronicController(ElectronicService electronicService){
        this.electronicService = electronicService;
    }
    @GetMapping("electronic")
    public JsonResponse getAllElect(){
        return new JsonResponse(true,"listing all electronic",this.electronicService.selectAllElectronic());
    }

    @PostMapping("electronic")
    public JsonResponse registerElectronic(@RequestBody Electronic electronic){
        JsonResponse jsonResponse;
        Electronic electronic1 = this.electronicService.registerNewElectronic(electronic);
        if(electronic1==null){
            jsonResponse = new JsonResponse(false,"electronic already exist",null);
        }else{
            jsonResponse = new JsonResponse(true,"electronic created",electronic);
        }
        return jsonResponse;
    }

    @GetMapping("electronic/{id}")
    public JsonResponse getElectronicById(@PathVariable Integer id){
        JsonResponse jsonResponse;
        Electronic electronic = this.electronicService.selectById(id);
        if(electronic!=null){
            jsonResponse= new JsonResponse(true,"electronic found",electronic);
        }else{
            jsonResponse = new JsonResponse(false, "electronic not found",null);
        }
        return jsonResponse;
    }

    @PatchMapping("electronic/update")
    public JsonResponse updateElectronic(@RequestBody Electronic electronic){
        Electronic electronic1 = this.electronicService.updateElect(electronic);
        if(electronic1!=null){
            return new JsonResponse(true,"user information updates",electronic);
        }
        return new JsonResponse(false,"Unable to update",null);
    }


}
