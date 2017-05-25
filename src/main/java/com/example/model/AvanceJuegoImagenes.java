package 
		com.example.model;
	    
	    import javax.persistence.*;
	    import java.util.Calendar;
	    @Entity
	    @Table(name = "avanceJuegoImageness", schema = "application")
public class AvanceJuegoImagenes {
	public AvanceJuegoImagenes(){}
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "avanceJuegoImagenes_id")
	private Long id;
		
	public Long getId() {
	return id;
	}
	
	public void setId(Long id) {
	this.id = id;
	}
@Column(name = "tiempoSegundos")
private Integer tiempoSegundos;

public Integer getTiempoSegundos() {
return tiempoSegundos;
}

public void setTiempoSegundos(Integer tiempoSegundos) {
this.tiempoSegundos = tiempoSegundos;
}
@Column(name = "numeroPreguntasIntentos")
private Integer numeroPreguntasIntentos;

public Integer getNumeroPreguntasIntentos() {
return numeroPreguntasIntentos;
}

public void setNumeroPreguntasIntentos(Integer numeroPreguntasIntentos) {
this.numeroPreguntasIntentos = numeroPreguntasIntentos;
}
@Column(name = "numeroPreguntasAciertos")
private Integer numeroPreguntasAciertos;

public Integer getNumeroPreguntasAciertos() {
return numeroPreguntasAciertos;
}

public void setNumeroPreguntasAciertos(Integer numeroPreguntasAciertos) {
this.numeroPreguntasAciertos = numeroPreguntasAciertos;
}
@Column(name = "date")
private Calendar date;

public Calendar getDate() {
return date;
}

public void setDate(Calendar date) {
this.date = date;
}
        }
