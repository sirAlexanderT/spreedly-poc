package com.qudini.service.integration.spreedly.rest;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static com.qudini.TestConstants.BASE_PATH;
import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;

@QuarkusTest
public class CountriesResourceTest {


    @Test
    public void testCountryNameEndpoint() {
        given()
                .when().get(BASE_PATH + "/country/name/greece")
                .then()
                .statusCode(200)
                .body("$.size()", is(1),
                        "[0].alpha2Code", is("GR"),
                        "[0].capital", is("Athens"),
                        "[0].currencies.size()", is(1),
                        "[0].currencies[0].name", is("Euro")
                );
    }

    @Test
    public void testCountryNameAsyncEndpoint() {
        given()
                .when().get(BASE_PATH + "/country/name-async/greece")
                .then()
                .statusCode(200)
                .body("$.size()", is(1),
                        "[0].alpha2Code", is("GR"),
                        "[0].capital", is("Athens"),
                        "[0].currencies.size()", is(1),
                        "[0].currencies[0].name", is("Euro")
                );
    }

}