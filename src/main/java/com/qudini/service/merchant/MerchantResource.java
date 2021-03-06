package com.qudini.service.merchant;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/merchants")
public class MerchantResource {

    @Inject
    MerchantRepository merchantRepository;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Merchant> findAll() {
        return merchantRepository.findAll().list();
    }
}
