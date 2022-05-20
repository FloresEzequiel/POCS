package com.ezeq.service;

import com.ezeq.models.Electronic;
import com.ezeq.repository.ElectronicDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("electronicService")
public class ElectronicService {
    private ElectronicDao electronicDao;
    @Autowired
    public ElectronicService(ElectronicDao electronicDao){
        this.electronicDao = electronicDao;
    }


    public List<Electronic> selectAllElectronic(){
        return this.electronicDao.findAll();
    }

    public Electronic selectById(Integer electronicId){
        return this.electronicDao.findById(electronicId).orElse(null);
    }

    public Electronic selectByName(String electronicName){
        return this.electronicDao.selectByName(electronicName);
    }

    public Electronic registerNewElectronic(Electronic electronic){
        Electronic electronic1 = selectByName(electronic.getElectName());
        if(electronic1==null){
            return this.electronicDao.save(electronic1);
        }else{
            return null;
        }
    }

    public Electronic updateElect(Electronic electronic){
        Electronic elec = this.electronicDao.findById(electronic.getElectId()).orElse(null);
        if(elec!=null){
            elec.setElectName(electronic.getElectName());
            elec.setModel(electronic.getModel());
            elec.setDetails(electronic.getDetails());
            elec.setPrice(electronic.getPrice());
            return this.electronicDao.save(elec);
        }else{
            return null;
        }
    }
}
