package com.qudini.integration.spreedly.rest.client.gateway;

import com.qudini.integration.spreedly.rest.client.gateway.domain.Gateways;
import io.smallrye.mutiny.Uni;
import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;

import javax.inject.Singleton;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/v1")
@Singleton
@RegisterRestClient(configKey = "spreedly-gateway-api")
public interface GatewayService {

    @GET
    @Path("/gateways_options.json")
    @Produces("application/json")
    Uni<Gateways> listSupportedGateways();
}
