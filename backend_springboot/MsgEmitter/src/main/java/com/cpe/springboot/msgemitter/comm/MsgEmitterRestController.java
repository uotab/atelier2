package com.cpe.springboot.msgemitter.comm;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cpe.springboot.msgemitter.comm.controller.BusService;
import com.cpe.springboot.user.UserBusMessage;
import com.cpe.springboot.user.UserDTO;


/**
 * @author luc.dacacio
 *
 */
@RestController
public class MsgEmitterRestController {

    @Autowired
    BusService busService;

   

    @RequestMapping(method=RequestMethod.PUT,value="/user/{id}")
	public boolean updateUser(@RequestBody UserDTO user,@PathVariable String id) {
		user.setId(Integer.valueOf(id));
		try {
			UserBusMessage userBusMessage = new UserBusMessage(user,"updateUser");

			busService.sendMsg(userBusMessage);
			return true;
			
		} catch (Exception e) {
            e.printStackTrace();
        }
		return false;
	}
}

