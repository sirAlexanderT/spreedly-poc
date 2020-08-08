package com.qudini.integration.spreedly.rest.client.gateway;

import com.qudini.integration.spreedly.rest.client.gateway.domain.AuthenticatedGateways;
import com.qudini.integration.spreedly.rest.client.gateway.domain.PublicGateways;
import io.smallrye.mutiny.Uni;
import org.eclipse.microprofile.rest.client.inject.RestClient;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/gateways")
public class GatewayResource {

    @Inject
    @RestClient
    GatewayService gatewayService;


    @GET
    @Path("/supported")
    @Produces(MediaType.APPLICATION_JSON)
    public Uni<PublicGateways> listSupportedGateways() {
        return gatewayService.listSupportedGateways();
    }

    @GET
    @Path("/created")
    @Produces(MediaType.APPLICATION_JSON)
    public Uni<AuthenticatedGateways> listCreatedGateways() {
        return gatewayService.listCreatedGateways();
    }

}
