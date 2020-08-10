package com.qudini.service.integration.spreedly.rest.client.gateway;

import com.qudini.service.integration.spreedly.rest.client.gateway.domain.AuthenticatedGatewaysResponse;
import com.qudini.service.integration.spreedly.rest.client.gateway.domain.GatewayRequest;
import com.qudini.service.integration.spreedly.rest.client.gateway.domain.GatewayResponse;
import com.qudini.service.integration.spreedly.rest.client.gateway.domain.PublicGatewaysResponse;
import io.smallrye.mutiny.Uni;
import org.eclipse.microprofile.config.ConfigProvider;
import org.eclipse.microprofile.rest.client.annotation.ClientHeaderParam;
import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;

import javax.inject.Singleton;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.Base64;

@Path("/v1")
@Singleton
@RegisterRestClient(configKey = "spreedly-gateway-api")
public interface GatewayService {

    @GET
    @Path("/gateways_options.json")
    @Produces(MediaType.APPLICATION_JSON)
    Uni<PublicGatewaysResponse> listSupportedGateways();

    @GET
    @Path("/gateways.json")
    @Produces(MediaType.APPLICATION_JSON)
    @ClientHeaderParam(name = "Authorization", value = "{generateAuthHeader}")
    Uni<AuthenticatedGatewaysResponse> listCreatedGateways();

    @POST
    @Path("/gateways.json")
    @Produces(MediaType.APPLICATION_JSON)
    @ClientHeaderParam(name = "Authorization", value = "{generateAuthHeader}")
    Uni<GatewayResponse> createGateway(GatewayRequest request);

    @GET
    @Path("/gateways/{token}.json")
    @Produces(MediaType.APPLICATION_JSON)
    @ClientHeaderParam(name = "Authorization", value = "{generateAuthHeader}")
    Uni<GatewayResponse> showGateway(@PathParam("token") String token);

    @PUT
    @Path("/gateways/{token}.json")
    @Produces(MediaType.APPLICATION_JSON)
    @ClientHeaderParam(name = "Authorization", value = "{generateAuthHeader}")
    Uni<GatewayResponse> updateGateway(@PathParam("token") String token,
                                       GatewayRequest request);


    default String generateAuthHeader() {
        final String spreedlyEnvironmentKey = ConfigProvider.getConfig().getValue("spreedly.environment-key", String.class);
        final String spreedlyAccessSecret = ConfigProvider.getConfig().getValue("spreedly.access-secret", String.class);
        return "Basic " + Base64
                .getEncoder()
                .encodeToString(
                        String.format("%s:%s", spreedlyEnvironmentKey, spreedlyAccessSecret).getBytes()
                );
    }
}
