package com.qudini.integration.spreedly.rest.client.gateway;

import com.qudini.integration.spreedly.rest.client.gateway.domain.Gateways;
import io.smallrye.mutiny.Uni;
import org.eclipse.microprofile.rest.client.inject.RestClient;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/gateway")
public class GatewayResource {

    @Inject
    @RestClient
    GatewayService gatewayService;


    @GET
    @Path("/list-supported")
    @Produces(MediaType.APPLICATION_JSON)
    public Uni<Gateways> listSupportedGateways() {
        return gatewayService.listSupportedGateways();
    }

}
